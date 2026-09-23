import ButtonsPage from '../../pages/ButtonsPage';

describe('Buttons', () => {

    beforeEach(() => {

        ButtonsPage.visit();

    });

    it('Should validate button click behavior', () => {

        ButtonsPage.clickButton();
        ButtonsPage.assertClickMessage();


    });

    it('Should validate right click behavior', () => {

        ButtonsPage.rightClickButton();
        ButtonsPage.assertRightClickMessage();


    });

    it('Should validate double click behavior', () => {

        ButtonsPage.doubleClickButton();
        ButtonsPage.assertDoubleClickMessage();
    });




});