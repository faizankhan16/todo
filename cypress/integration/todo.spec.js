/// <reference types="Cypress" />

describe('First test', () => {
    it('visit the website', () => {
        cy.visit("/")
        // cy.contains('[class="todolist"]', 'Things To Do')
    });

    it('verify todo text', () => {
        cy.contains((/(things.to.do)/i));
    });

    //Checking and unchecking the boxes
    it('checking the strikethrough on the text after it is checked', () => {
        cy.get('input[type="checkbox"]').each( checkbox => {
            cy.wrap(checkbox).check().should('be.checked')  
        })
        cy.get('label').each( lab => {
            cy.wrap(lab).should('have.css', 'text-decoration', 'line-through solid rgb(170, 170, 170)')
        })
        })

    //Entering a new task
    // it('Verify if new item functionality', () => {
    //     cy.get('[data-cy="addNew"]').then( addNew => {
    //         cy.wrap(addNew).type('New Task').type('{enter}');
    //         cy.wrap(addNew).type('      ').type('{enter}');
    //     cy.get('[class="list-unstyled"]').should('not.contain', '      ')
        
    // })

    //Verifying the Search functionality
    // it('Verify the Search functionality', () => {
    //     cy.get('[class="button search "]').click()
    //     cy.get('[data-cy="search"]').type('Build a React App').type('{enter}').clear()
    // })

    //Verifying the esc, N and / keys
    // it('Verifying the functionality of esc, N and / keys', () => {
    //     cy.contains('div', 'Things To Do').trigger('keydown', { keyCode: 27 }).trigger('keydown', { keyCode: 78 }).type('{/}')
    // })

    // //Verify if the All button shows the checked and unchecked tasks
    it('verifying that all the list items in the completed tab have a line through and are checked', () => {
        cy.get('input[type="checkbox"]').each( data => {
            if(cy.wrap(data).should('be.checked')) {
                cy.contains('Completed').click()
                    cy.get('[type="checkbox"]').each( list => {
                        cy.wrap(list).should('be.checked')
                        cy.get('label').each( listItem =>{
                            cy.wrap(listItem).should('have.css', 'text-decoration', 'line-through solid rgb(170, 170, 170)')
                        })
                    })
                 }
                  else {
                cy.contains('Completed').click()
                cy.contains('[class="todolist"]', "There are no items.")
            }


 // cy.contains(/completed/i).click()
        // cy.get('input[type="checkbox"]').then( checkbox => {
        //     cy.wrap(checkbox).each( items => {
        //         cy.wrap(items).should('be.checked')
        // })
        // cy.get('label').each( listItem => {
        //     cy.wrap(listItem).should('have.css', 'text-decoration', 'line-through solid rgb(170, 170, 170)')
        // })
        // })
})
                // }
})
    })
    // })
