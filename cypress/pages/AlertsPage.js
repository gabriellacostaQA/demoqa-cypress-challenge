class AlertsPage {

    visit() {
        cy.visit('/alerts');
        this.removeAdOverlays();
    }

    removeAdOverlays() {
        cy.wait(1000);

        cy.get('body').then(($body) => {
            const selectors = [
                '#fixedban',
                'footer',
                '.adsbygoogle',
                'iframe[id^="google_ads_iframe"]'
            ];

            selectors.forEach((sel) => {
                if ($body.find(sel).length) {
                    cy.get(sel).invoke('remove');
                }
            });
        });
    }

    simpleAlert() {
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alert');
        });

        cy.get('#alertButton').click();

        cy.get('@alert').should('have.been.calledWith', 'You clicked a button');
    }

    confirmationDialog(valor) {
        cy.window().then((win) => {
            cy.stub(win, 'confirm').as('confirmStub').returns(valor);
        });

        cy.get('#confirmButton').click();

        const expectedText = valor ? 'You selected Ok' : 'You selected Cancel';
        cy.get('#confirmResult').should('have.text', expectedText);

        return this;
    }

    promptDialog(valor) {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').as('promptStub').returns(valor);
        });

        cy.get('#promtButton').click();

        const expectedText = valor === null ? 'You entered null' : `You entered ${valor}`;
        cy.get('#promptResult').should('have.text', expectedText);

        return this;
    }



}

export default new AlertsPage();