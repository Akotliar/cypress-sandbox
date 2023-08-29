describe('Exercice #2', () => {

    beforeEach(function () {
        cy.visit('https://www.amazon.com/', {});


    });

    it('User Is Able To Change Currency', () => { 
        
        cy.get("#icp-nav-flyout").should("be.visible").click();
        cy.get("#icp-currency-dropdown-selected-item-prompt").should("be.visible").click();
        //LIST OF CURRENCYS AND SELECT "CLP" --> CHILEAN OPTION :D
        cy.get("#a-popover-1").should("be.visible");
        cy.get('li#CLP').click();
        //BUTTON SAVE CHANGES
        cy.get("#icp-save-button").should("be.visible").click();

        //NOW GO TO THE SEARCHBAR
        cy.get("#twotabsearchtextbox").should("be.visible").type('ps5{enter}')
        // cy.wait(2000)

    });

});