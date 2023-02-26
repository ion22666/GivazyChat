/// <reference types="cypress" />
import cypress from "cypress";

describe("Login Page", () => {
    beforeEach(() => {
        cy.setCookie("session", "");
        cy.visit("/login");
    });

    describe("'Login' button tests", () => {
        beforeEach(() => {
            cy.get("button").contains(/login/i).as("loginButton");
        });

        it("should exist", () => {
            cy.get("@loginButton").should("exist");
        });

        it("should be visible", () => {
            cy.get("@loginButton").should("be.visible");
        });
        it("should have the correct text", () => {
            cy.get("@loginButton").contains(/login/i);
        });

        describe("on click", () => {
            // [test description, email, password, shouldNotCallApi]
            const testCases: [string, string, string, boolean][] = [
                ["email and password missing", "", "", true],
                ["email missing", "", "valid_password", true],
                ["password missing", "valid_email@email.com", "", true],
                ["password too sort", "valid_email@email.com", "pass_", true],
                ["email not valid", "invalid_email", "valid_password", true],
                ["valid input", "valid_email@email.com", "valid_password", false],
            ];

            beforeEach(() => {
                cy.get("input[id=email]").as("emailInput");
                cy.get("input[id=password]").as("passwordInput");
                cy.get("@loginButton").as("loginButton");
                cy.intercept("/api/login").as("loginRequest");
            });

            testCases.forEach(([description, email, password, shouldNotCallApi]) => {
                it(description, () => {
                    cy.get("@emailInput").type(email);
                    cy.get("@passwordInput").type(password);
                    cy.get("@loginButton").click();
                    cy.wait(200);
                    cy.get("@loginRequest").should(shouldNotCallApi ? "not.have.been.called" : "have.been.called");
                });
            });
        });
    });
});
