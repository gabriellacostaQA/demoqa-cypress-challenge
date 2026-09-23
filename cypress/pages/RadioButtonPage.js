class RadioButtonPage {
    visit() {
        cy.visit('radio-button');
        this.removeAdOverlays();
    }

    removeAdOverlays() {
        cy.get('body').then(($body) => {
            const selectors = ['#fixedban', 'footer', '.adsbygoogle'];
            selectors.forEach((sel) => {
                if ($body.find(sel).length) {
                    cy.get(sel).invoke('remove');
                }
            });
        });
    }

    //Actions

    selectYes(yes) {
        cy.contains('label', yes).click();
        return this;
    }

    selectNo(no) {
        cy.contains('label', no).click();
        return this;
    }

    selectImpressive(impressive) {
        cy.contains('label', impressive).click();
        return this;
    }

    //Assertions

    assertSelectedMessage(value) {
        cy.contains('p', `You have selected ${value}`)
            .should('be.visible');

        return this;
    }

    assertNoRadioButtonDisabled() {
        cy.get('#noRadio')
            .should('be.disabled');

        return this;
    }


}

export default new RadioButtonPage();