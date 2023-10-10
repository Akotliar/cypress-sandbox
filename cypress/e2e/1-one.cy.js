describe('[logged out] Amazon.com Account & Lists Menu', () => {

    beforeEach(function () {
        cy.visit('https://www.amazon.com/', {});


    });

    it('Should navigate to signin page when "Watchlist" menu item is clicked', () => { 
        cy.get("[id='nav-link-accountList']").trigger('mouseover');
        cy.get('a').contains("Watchlist").should('be.visible').click();
        cy.get("[id='ap_email']").should("be.visible");
        cy.url().should("contain", "ap/signin");
    });

});