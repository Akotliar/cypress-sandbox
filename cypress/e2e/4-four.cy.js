
context('Sony Design Stories', () => {
    beforeEach(() => {
        cy.visit('https://www.sony.com/en/SonyInfo/design/stories/', { failOnStatusCode: false})

        /**
         * it's allways perferable to not do this. in cases where it can't be avoided we want to be specific on the errors as we 
         * should review the impact of any new errors that appear in the future.
         */
        Cypress.on('uncaught:exception', (err, runnable) => {
            if(err.message.includes("jQuery is not defined")){
                return false
            }
            if(err.message.includes("Cannot read properties of undefined (reading 'msie')")){
                return false
            }
        })
    })
  
    it.only('is displayed', () => {
        cy.getPlus('.current > .tag-link').should('be.visible')
    })
});
