import RadioButtonPage from '../../pages/RadioButtonPage';

describe('Radio Button', () => {

    beforeEach(() => {

        RadioButtonPage.visit();

    });

    it('Should select the Yes radio button', () => {

        RadioButtonPage.selectYes('Yes');
        RadioButtonPage.assertSelectedMessage('Yes');

    });

    it('Should not allow selecting the disabled No radio button', () => {

        RadioButtonPage.assertNoRadioButtonDisabled();

    });

    it('Should select the Impressive radio button', () => {

        RadioButtonPage.selectYes('Impressive');
        RadioButtonPage.assertSelectedMessage('Impressive');


    });
});