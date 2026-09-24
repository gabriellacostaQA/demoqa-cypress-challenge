import PracticeFormPage from '../../pages/PracticeFormPage';
import data from '../../fixtures/practice-form.json';

describe('Practice Form', () => {

    beforeEach(() => {

        PracticeFormPage.visit();

    });

    it('Must successfully submit the form when all required fields are filled in', () => {

        PracticeFormPage.fillFirstName(data.firstName)
        PracticeFormPage.fillLastName(data.lastName)
        PracticeFormPage.fillEmail(data.email)
        PracticeFormPage.selectGender(data.gender)
        PracticeFormPage.fillMobileNumber(data.mobile)
        PracticeFormPage.fillDateOfBirth(data.dateOfBirth.day, data.dateOfBirth.month, data.dateOfBirth.year)
        PracticeFormPage.selectHobby(data.hobby)
        PracticeFormPage.submit()
        PracticeFormPage.assertSubmissionModalVisible();
        PracticeFormPage.assertModalContains('Student Name', `${data.firstName} ${data.lastName}`);

    });

    it('Should not submit when mandatory fields are empty.', () => {

        PracticeFormPage.submit()
        PracticeFormPage.assertRequiredFieldsValidation();
        PracticeFormPage.assertSubmissionModalNotExist();

    });
});