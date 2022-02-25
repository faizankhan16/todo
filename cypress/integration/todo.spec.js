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
        cy.get('input[type="checkbox"]').eq(0).check().uncheck()
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked');
        cy.get('input[type="checkbox"]').eq(2).check().should('be.checked');
        cy.get('label').eq(1).should('have.css', 'text-decoration', 'line-through solid rgb(170, 170, 170)')
        cy.get('label').eq(2).should('have.css', 'text-decoration', 'line-through solid rgb(170, 170, 170)')
    })

    //Entering a new task
    it('Verify if new item functionality', () => {
        cy.get('[data-cy="addNew"]').type('New Task').type('{enter}');
        cy.get('[data-cy="addNew"]').type('      ').type('{enter}');
        cy.get('[class="list-unstyled"]').should('not.contain', '      ')
    })

    //Verifying the Search functionality
    it('Verify the Search functionality', () => {
        cy.get('[class="button search "]').click()
        cy.get('[data-cy="search"]').type('Build a React App').type('{enter}').type('{selectall}{backspace}')
    })

    //Verifying the esc, N and / keys
    // it('Verifying the functionality of esc, N and / keys', () => {
    //     cy.contains('div', 'Things To Do').trigger('keydown', { keyCode: 27 }).trigger('keydown', { keyCode: 78 }).type('{/}')
    // })

    // //Verify if the All button shows the checked and unchecked tasks
    it('verifying that all the list items in the completed tab have a line through and are checked', () => {
        cy.contains(/completed/i).click()
        cy.get('input[type="checkbox"]').then( checkbox => {
            cy.wrap(checkbox).eq(0).check().should('be.checked');
        })
        
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked');
        cy.get('label').eq(0).should('have.css', 'text-decoration', 'line-through solid rgb(170, 170, 170)')
        cy.get('label').eq(1).should('have.css', 'text-decoration', 'line-through solid rgb(170, 170, 170)')
        cy.xpath('/*//a[contains(., "All")]').then( $all => {
            cy.contains($all[0].innerText).click()
            cy.xpath('/*//ul[@class="list-unstyled"]').then( $ul => {
                let ul = $ul[0].childElementCount
                for (var i = 0; i < ul; i++) {
                cy.contains($ul[0].children[i].innerText).should('be.visible')
                }
            // cy.contains($ul[0].outerText)
            })
        })
    //     cy.get('body').then(data => {
    //         if(data.contains(/there.are.no.items/i)){
    //             cy.log('No items found in the list')
    //         } else {
    //             cy.get('ul[class="list-unstyled"]').then($data => {
    //                 const data = $data[0].childElementCount;
    //                 cy.contains(data).should('be.visible')
    //         })
//     // }
// })
    })
})