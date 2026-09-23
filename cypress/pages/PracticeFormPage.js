class PracticeFormPage {
    visit() {
        cy.visit('/automation-practice-form');
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

    selectGender(gender) {
        cy.contains('label', gender).click();
        return this;
    }

    fillMobileNumber(value) {
        cy.get('#userNumber').clear().type(value);
        return this;
    }

    fillDateOfBirth(day, month, year) {

        cy.get('#dateOfBirthInput').click();

        const months = {
            January: '0',
            February: '1',
            March: '2',
            April: '3',
            May: '4',
            June: '5',
            July: '6',
            August: '7',
            September: '8',
            October: '9',
            November: '10',
            December: '11'
        };

        cy.get('.react-datepicker__month-select').select(months[month]);
        cy.get('.react-datepicker__year-select').select(year);
        cy.get(`.react-datepicker__day--${String(day).padStart(3, '0')}`)
            .not('.react-datepicker__day--outside-month')
            .click();

    }

    selectHobby(hobby) {
        cy.contains('label', hobby).click();
        return this;
    }


    submit() {
        cy.get('#submit').click();
        return this;
    }

    //Assertions
    assertSubmissionModalVisible() {
        cy.get('.modal-content').should('be.visible');
    }

    assertModalContains(field, value) {
        cy.get('.table-responsive').contains('td', field).parent().should('contain.text', value);
    }

    assertRequiredFieldsValidation() {

        cy.get('#firstName').then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        });

        cy.get('#lastName').then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        });

        cy.get('#gender-radio-1').then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        });

        cy.get('#userNumber').then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        });

    }

    assertSubmissionModalNotExist() {
        cy.get('.modal-content').should('not.exist');
    }





}

export default new PracticeFormPage();