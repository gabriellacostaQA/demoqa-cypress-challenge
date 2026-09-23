class WebtablesPage {
    visit() {
        cy.visit('/webtables');
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

    buttonAdd() {
        cy.get('#addNewRecordButton').click();
        return this;
    }


    fillFirstName(value) {
        cy.get('#firstName').clear().type(value);
        return this;
    }

    fillLastName(value) {
        cy.get('#lastName').clear().type(value);
        return this;
    }

    fillEmail(value) {
        cy.get('#userEmail').clear().type(value);
        return this;
    }

    fillAge(value) {
        cy.get('#age').clear().type(value);
        return this;
    }

    fillSalary(value) {
        cy.get('#salary').clear().type(value);
        return this;
    }

    fillDepartment(value) {
        cy.get('#department').clear().type(value);
        return this;
    }

    getRowByName(firstName) {
        return cy.contains('tbody tr', firstName);
    }


    buttonSubmit() {
        cy.get('#submit').click();
        return this;
    }

    editRecord(firstName) {
        this.getRowByName(firstName)
            .find('[title="Edit"]')
            .click({ force: true });

        return this;
    }

    deleteRecord(firstName) {
        this.getRowByName(firstName)
            .find('[title="Delete"]')
            .click({ force: true });

        return this;
    }


    //Assertions
    assertRowData(firstName, lastName, age, email, salary, department) {
        this.getRowByName(firstName).within(() => {
            cy.get('td').eq(0).should('have.text', firstName);
            cy.get('td').eq(1).should('have.text', lastName);
            cy.get('td').eq(2).should('have.text', age);
            cy.get('td').eq(3).should('have.text', email);
            cy.get('td').eq(4).should('have.text', salary);
            cy.get('td').eq(5).should('have.text', department);
        });

        return this;
    }

    assertRowNotExist(firstName) {
        cy.get('tbody tr')
            .should('not.contain.text', firstName);

        return this;
    }



}

export default new WebtablesPage();