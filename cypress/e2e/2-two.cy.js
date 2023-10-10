describe('Currency Settings', () => {

    beforeEach(function () {
        cy.visit('https://www.amazon.com/', {});


    });

    it('should update currency for items for sale in search list', () => { 
        
        cy.get("#icp-nav-flyout").should("be.visible").click();
        cy.get("#icp-currency-dropdown-selected-item-prompt").should("be.visible").click();
        cy.get("#a-popover-1").should("be.visible");
        cy.get('li#CLP').click();
        cy.get("#icp-save-button").should("be.visible").click();
        cy.get("#twotabsearchtextbox").should("be.visible").type('ps5{enter}')
    });

});