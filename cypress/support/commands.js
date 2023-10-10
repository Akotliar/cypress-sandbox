// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { VIEWPORT_SIZE, viewportSize } from './e2e'


/**
 * options:
 *       backgroundColor: "#FF12JD",
 *       foregroundColor: "#000000",
 *       
 */
Cypress.Commands.add('getSonyWebsitePlus', (selector, options) => {
    let width = Cypress.config('viewportWidth')
     cy.log(`screen width: ${width}`)
     return cy.get(selector).then((element) => {
        let viewport = viewportSize(parseInt(width))
        switch(viewport){
        case VIEWPORT_SIZE.LARGE:
            //do some validations on Large screen
            break
        case VIEWPORT_SIZE.MEDIUM:
            //do some validations on medium screen
            break;
        case VIEWPORT_SIZE.SMALL:
            //do some validations on small screen
            break;
        }

        return element
     })
})

