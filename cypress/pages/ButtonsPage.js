class ButtonsPage {
    visit() {
        cy.visit('/buttons');
        this.removeAdOverlays();
    }

    removeAdOverlays() {
        cy.wait(1000);
        cy.get('body').then(($body) => {
            const selectors = ['#fixedban', 'footer', '.adsbygoogle', 'iframe[id^="google_ads_iframe"]'];
            selectors.forEach((sel) => {
                if ($body.find(sel).length) {
                    cy.get(sel).invoke('remove');
                }
            });
        });
    }

    //Actions

    clickButton() {
        cy.contains('button', /^Click Me$/).click();
        return this;
    }

    rightClickButton() {
        cy.contains('button', 'Right Click Me').rightclick();
        return this;
    }


    doubleClickButton() {
        cy.contains('button', 'Double Click Me').dblclick();
        return this;
    }



    //Assertions

    assertClickMessage() {
        cy.get('#dynamicClickMessage')
            .should('be.visible')
            .and('have.text', 'You have done a dynamic click');
        return this;
    }

    assertRightClickMessage() {
        cy.get('#rightClickMessage')
            .should('be.visible')
            .and('have.text', 'You have done a right click');
        return this;
    }
    assertDoubleClickMessage() {
        cy.get('#doubleClickMessage')
            .should('be.visible')
            .and('have.text', 'You have done a double click');
        return this;
    }

}

export default new ButtonsPage();