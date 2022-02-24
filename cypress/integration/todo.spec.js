/// <reference types="Cypress" />

describe('First test', () => {
    it('Write text', () => {
        cy.visit("/")
    });
    it('verify todo text', () => {
        cy.contains('Things To Do');
    });

    //Checking the boxes
    it('checking the checkbox', () => {
        cy.get('input[type="checkbox"]').eq(0).check();
        cy.get('input[type="checkbox"]').eq(1).check();
        cy.get('input[type="checkbox"]').eq(2).check();
    });

    //Unchecking the boxes
    it('Unchecking the checkbox', () => {
        cy.get('input[type="checkbox"]').eq(0).uncheck();
        // cy.get('input[type="checkbox"]').eq(1).uncheck();
        // cy.get('input[type="checkbox"]').eq(2).uncheck();
    })

    // it('Verify if the checkboxes have been checked', () => {
    //     cy.get('input[type="checkbox"]').eq(0).should('be.checked');
    //     cy.get('input[type="checkbox"]').eq(1).should('be.checked')
    // })

    //Verifying if the boxes are checked/unchecked
    it('Verify if some boxes are unchecked', () => {
        cy.get('input[type="checkbox"]').eq(0).should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('be.checked')
        cy.get('input[type="checkbox"]').eq(2).should('be.checked')
    })

    //Entering a new task
    it('Enter a new task', () => {
        cy.get('[data-cy="addNew"]').type('New Task').type('{enter}');
    })

    //Verify if new item is created if only spaces are typed in the Add new
    it('New item is created if only spaces are typed in the Add new', () => {
        cy.get('[data-cy="addNew"]').type('      ').type('{enter}');
        cy.get('[class="list-unstyled"]').should('not.contain', '      ')
    })

    //Verifying the Search functionality
    it('Verify the Search functionality', () => {
        cy.get('[class="button search "]').click()
    })

    //Searching an item
    // it('Searching an item', () => {
    //     cy.get('[data-cy="search"]').type('Build a React App').type('{enter}');
    // })

    //Verify if the checked items have a strikethrough on the texts
    // it('Strikethrough on the text after it is checked', () => {
    //     cy.get('input[type="checkbox"]').eq(1).should('have.css', 'text-decoration', 'line-through')
    //     cy.get('input[type="checkbox"]').eq(2).should('have.css', 'text-decoration', 'line-through')
    // })

    //Verify if the All button shows the checked and unchecked tasks
    it('Checking the All button', () => {
        cy.get('[class="selected"]').click()
        cy.get('[class="list-unstyled"]').should('be.checked', 'not.be.checked')

    })
})
