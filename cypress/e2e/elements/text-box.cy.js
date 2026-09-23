import TextBoxPage from '../../pages/TextBoxPage';

describe('Text Box', () => {

    beforeEach(() => {

        TextBoxPage.visit();

    });

    it('Should successfully submit the form with valid data', () => {

        TextBoxPage.fillFullName('Gabriella Costa');
        TextBoxPage.fillEmail('gabriella@teste.com');
        TextBoxPage.fillCurrentAddress('Street Test, 123');
        TextBoxPage.fillPermanentAddress('Street Test, 456');
        TextBoxPage.submit()
        TextBoxPage.assertOutputContains('name', 'Gabriella Costa');
        TextBoxPage.assertOutputContains('email', 'gabriella@teste.com');
        TextBoxPage.assertOutputContains('currentAddress', 'Street Test, 123');
        TextBoxPage.assertOutputContains('permanentAddress', 'Street Test, 456');

    });

    it('Should not submit the form with an invalid email', () => {

        TextBoxPage.fillFullName('Gabriella Costa');
        TextBoxPage.fillEmail('gabriellatest@');
        TextBoxPage.fillCurrentAddress('Street Test, 123');
        TextBoxPage.fillPermanentAddress('Street Test, 456');
        TextBoxPage.submit()  
        TextBoxPage.assertEmailIsInvalid();  


    });
});