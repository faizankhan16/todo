/// <reference types="Cypress" />

describe('First test', () => {
    it('Write text', () => {
        cy.visit("/")
    });
    it('verify todo text', () => {
        cy.contains('Things To Do!!!');
    });
});