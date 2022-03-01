/// <reference types="Cypress" />

describe('First test', () => {
    it('Write text', () => {
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
    it('Verify if new item functionality', () => {
        cy.get('[data-cy="addNew"]').then( addNew => {
            cy.wrap(addNew).type('New Task').type('{enter}');
            cy.wrap(addNew).type('      ').type('{enter}');
        cy.get('[class="list-unstyled"]').should('not.contain', '      ')
        
    })
})
    //Verifying the Search functionality
    it('Verify the Search functionality', () => {
        cy.get('[class="button search "]').click()
        cy.get('[data-cy="search"]').type('Build a React App').type('{enter}').clear()
    })

    //Verifying the esc, N and / keys
    // it('Verifying the functionality of esc, N and / keys', () => {
    //     cy.contains('div', 'Things To Do').trigger('keydown', { keyCode: 27 }).trigger('keydown', { keyCode: 78 }).type('{/}')
    // })

    // //Verify if the All button shows the checked and unchecked tasks
    it('verifying that all the list items in the completed tab have a line through and are checked', () => {
        cy.contains(/completed/i).click()
        cy.get('input[type="checkbox"]').then( checkbox => {
            cy.wrap(checkbox).each( items => {
                cy.wrap(items).should('be.checked')
        })
        cy.get('label').each( listItem => {
            cy.wrap(listItem).should('have.css', 'text-decoration', 'line-through solid rgb(170, 170, 170)')
        })
        })
    //     cy.get('body').then(data => {
    //         if(data.contains(/there.are.no.items/i)){
    //             cy.log('No items found in the list')
    //         } else {
    //             cy.get('ul[class="list-unstyled"]').then($data => {
    //                 const data = $data[0].childElementCount;
    //                  cy.contains(data).should('be.visible')
            })
//     // }
})
        


