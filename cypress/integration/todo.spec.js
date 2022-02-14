/// <reference types="Cypress" />

describe('First test', () => {
    it('Write text', () => {
        cy.visit("/")
    });
    it('verify todo text', () => {
        cy.contains('Things To Do');
    });
    it('verify todo text 1', () => {
        cy.contains('Things To Do');
    });
});