/// <reference types="cypress" />
import cypress from "cypress";

describe("Login Page", () => {
    before(() => {
        cy.setCookie("session", "");
        cy.visit("/login");
    });

    afterEach(function () {
        if (this.currentTest.state === "failed") {
            cy.visit("/login");
        }
    });

    describe("'Login' button tests", () => {
        beforeEach(() => {
            cy.get("button[id=loginBtn]").as("loginButton");
        });

        it("should exist", () => {
            cy.get("@loginButton").should("exist");
        });

        it("should be visible", () => {
            cy.get("@loginButton").should("be.visible");
        });
        it("should contain the 'login' text", () => {
            cy.get("@loginButton").contains(/login/i);
        });

        describe("on click events", () => {
            // [test description, email, password, shouldNotCallApi]
            const testCases: [string, string, string, boolean][] = [
                ["email and password missing", "", "", true],
                ["email missing", "", "valid_password", true],
                ["email not valid", "invalid_email", "valid_password", true],
                ["password missing", "valid_email@email.com", "", true],
                ["password too sort", "valid_email@email.com", "pass_", true],
                ["valid input", "valid_email@email.com", "valid_password", false],
            ];

            beforeEach(() => {
                cy.get("input[id=email]").as("emailInput");
                cy.get("input[id=password]").as("passwordInput");
            });

            testCases.forEach(([description, email, password, shouldNotCallApi]) => {
                it(description, () => {
                    cy.get("@emailInput").clear();
                    cy.get("@passwordInput").clear();

                    if (email) cy.get("@emailInput").type(email);
                    if (password) cy.get("@passwordInput").type(password);

                    cy.get("@loginButton").click();
                    cy.wait(500);
                    cy.location("pathname", { timeout: 0 }).should("eq", shouldNotCallApi ? "/login" : "/");
                });
            });
        });
    });

    describe("'Register' redirect button tests", () => {
        before(() => {
            cy.visit("/login");
        });
        beforeEach(() => {
            cy.get("button[id=redirectRegisterBtn]").as("registerRedirectButton");
        });

        it("should exist", () => {
            cy.get("@registerRedirectButton").should("exist");
        });

        it("should be visible", () => {
            cy.get("@registerRedirectButton").should("be.visible");
        });

        it("should contain the 'register' text", () => {
            cy.get("@registerRedirectButton").contains(/register/i);
        });

        it("should redirect to Register Page on click", () => {
            cy.get("@registerRedirectButton").click();
            cy.location("pathname", { timeout: 2000 }).should("eq", "/register");
        });
    });
});
