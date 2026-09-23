import PracticeFormPage from '../../pages/PracticeFormPage';

describe('Practice Form', () => {

    beforeEach(() => {

        PracticeFormPage.visit();

    });

    it('Must successfully submit the form when all required fields are filled in', () => {

        PracticeFormPage.fillFirstName('Gabriella')
        PracticeFormPage.fillLastName('Costa')
        PracticeFormPage.fillEmail('gabriellacosta@teste.com')
        PracticeFormPage.selectGender('Female')
        PracticeFormPage.fillMobileNumber('1234567890')
        PracticeFormPage.fillDateOfBirth('5', 'November', '1999')
        PracticeFormPage.selectHobby('Sports')
        PracticeFormPage.submit()
        PracticeFormPage.assertSubmissionModalVisible();
        PracticeFormPage.assertModalContains('Student Name', 'Gabriella Costa');

    });

    it('Should not submit when mandatory fields are empty.', () => {

        PracticeFormPage.submit()
        PracticeFormPage.assertRequiredFieldsValidation();
        PracticeFormPage.assertSubmissionModalNotExist();

    });
});