/// <reference types="cypress" />
import cypress from "cypress";

describe("template spec", () => {
    it("passes", () => {
        cy.visit("/register");
    });
});
