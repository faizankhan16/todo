/// <reference types="Cypress" />

describe('First test', () => {
    it('Write text', () => {
        cy.visit("/")
    });
    it('verify todo text', () => {
        cy.contains('Things To Do');
    });
    it('checking the checkboxes', () => {
        cy.get('input[type="checkbox"]').eq(0).check();
        cy.get('input[type="checkbox"]').eq(1).check();
        cy.get('input[type="checkbox"]').eq(2).check();
    });
    it('verify if the checkboxes have been checked', () => {
        cy.get('input[type="checkbox"]').eq(0).should('be.checked');
        cy.get('input[type="checkbox"]').eq(1).should('be.checked');
        cy.get('input[type="checkbox"]').eq(2).should('be.checked');
    });
        
});