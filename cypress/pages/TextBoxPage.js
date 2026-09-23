class TextBoxPage {
    visit() {
        cy.visit('/text-box');
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
    fillFullName(value) {
        cy.get('#userName').clear().type(value);
        return this;
    }

    fillEmail(value) {
        cy.get('#userEmail').clear().type(value);
        return this;
    }

    fillCurrentAddress(value) {
        cy.get('#currentAddress').clear().type(value);
        return this;
    }

    fillPermanentAddress(value) {
        cy.get('#permanentAddress').clear().type(value);
        return this;
    }

    submit() {
        cy.get('#submit').click();
        return this;
    }

    //Assertions
    assertOutputContains(field, value) {
        cy.get('#output').find(`#${field}`).should('contain.text', value);
        return this;
    }

    assertEmailIsInvalid() {
    cy.get('#userEmail').should('have.class', 'field-error');
    return this;
}











}

export default new TextBoxPage();