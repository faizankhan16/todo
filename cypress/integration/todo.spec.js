/// <reference types="Cypress" />

describe('First test', () => {
    beforeEach('Write text', () => {
        cy.visit("/")
        // cy.contains('[class="todolist"]', 'Things To Do')
    });

    it('verify todo text', () => {
        cy.contains('Things To Do');
    });

    //Checking and unchecking the boxes
    it.only('checking the checkbox and strikethrough on the text after it is checked', () => {
        cy.get('input[type="checkbox"]').eq(0).check().uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked');
        cy.get('input[type="checkbox"]').eq(2).check().should('be.checked');
        cy.get('label').eq(1).should('have.css', 'text-decoration', 'line-through solid rgb(170, 170, 170)')
        cy.get('label').eq(2).should('have.css', 'text-decoration', 'line-through solid rgb(170, 170, 170)')
    })

    //Entering a new task
    it('Enter a new task and verify if new item is created when only spaces are typed in the Add new', () => {
        cy.get('[data-cy="addNew"]').type('New Task').type('{enter}');
        cy.get('[data-cy="addNew"]').type('      ').type('{enter}');
        cy.get('[class="list-unstyled"]').should('not.contain', '      ')
    })

    //Verifying the Search functionality
    it('Verify the Search functionality', () => {
        cy.get('[class="button search "]').click()
        cy.get('[data-cy="search"]').type('Build a React App').type('{enter}');
    })

    //Verify if the All button shows the checked and unchecked tasks
    it('Checking the All button', () => {
        cy.get('[class="selected"]').click()
        cy.get('[class="list-unstyled"]').should('be.checked', 'not.be.checked')

    })
})
