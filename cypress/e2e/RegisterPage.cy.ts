/// <reference types="cypress" />
import cypress from "cypress";

describe("Register Page", () => {
    before(() => {
        cy.setCookie("session", "");
        cy.visit("/register");
    });

    afterEach(function () {
        if (this.currentTest.state === "failed") {
            cy.visit("/register");
        }
    });

    describe("'Register' button tests", () => {
        beforeEach(() => {
            cy.get("button")
                .contains(/register/i)
                .as("registerButton");
        });

        it("should exist", () => {
            cy.get("@registerButton").should("exist");
        });

        it("should be visible", () => {
            cy.get("@registerButton").should("be.visible");
        });
        it("should have the correct text", () => {
            cy.get("@registerButton").contains(/register/i);
        });

        describe("on click", () => {
            let valid_email = "valid_email@email.com",
                invalid_email = "invalid_email",
                valid_username = "Gigel",
                invalid_username = "Gigel#%",
                valid_password = "valid_password",
                invalid_password = "pass_";

            // [test description, email, username, password, confirm_password, shouldNotCallApi]
            const testCases: [string, string | null, string | null, string | null, string | null, boolean][] = [
                ["all credentials missing", null, null, null, null, true],

                ["email missing", null, valid_username, valid_password, valid_password, true],
                ["username missing", valid_email, null, valid_password, valid_password, true],
                ["password missing", valid_email, valid_username, null, valid_password, true],
                ["confirm password missing", valid_email, valid_username, valid_password, null, true],

                ["invalid email", valid_email, valid_username, valid_password, null, true],
                ["invalid username", valid_email, valid_username, valid_password, null, true],
                ["invalid password", valid_email, valid_username, valid_password, null, true],
                ["password and confirm password don't match", valid_email, valid_username, valid_password, valid_password + "a", true],

                ["valid input", valid_email, valid_username, valid_password, valid_password, false],
            ];

            beforeEach(() => {
                cy.get("input[id=email]").as("emailInput");
                cy.get("input[id=username]").as("usernameInput");
                cy.get("input[id=password]").as("passwordInput");
                cy.get("input[id=confirmPassword]").as("confirm_passwordInput");
            });

            testCases.forEach(([description, email, username, password, confirm_password, shouldNotCallApi]) => {
                it(description, () => {
                    cy.get("@emailInput").clear();
                    cy.get("@usernameInput").clear();
                    cy.get("@passwordInput").clear();
                    cy.get("@confirm_passwordInput").clear();

                    if (email) cy.get("@emailInput").type(email);
                    if (username) cy.get("@usernameInput").type(username);
                    if (password) cy.get("@passwordInput").type(password);
                    if (confirm_password) cy.get("@confirm_passwordInput").type(confirm_password);

                    cy.get("@registerButton").click({ force: true });
                    cy.wait(500);
                    cy.location("pathname", { timeout: 0 }).should("eq", shouldNotCallApi ? "/register" : "/");
                });
            });
        });
    });

    describe("'Login' redirect button tests", () => {
        before(() => {
            cy.visit("/register");
        });

        beforeEach(() => {
            cy.get("button[id=btnToLogin]").as("loginRedirectButton");
        });

        it("should exist", () => {
            cy.get("@loginRedirectButton").should("exist");
        });

        it("should be visible", () => {
            cy.get("@loginRedirectButton").should("be.visible");
        });

        it("should contain the 'login' text", () => {
            cy.get("@loginRedirectButton").contains(/login/i);
        });

        it("should redirect to Login Page on click", () => {
            cy.get("@loginRedirectButton").click();
            cy.location("pathname", { timeout: 2000 }).should("eq", "/login");
        });
    });
});
