import CheckBoxPage from '../../pages/CheckBoxPage';

describe('Check Box', () => {

    beforeEach(() => {

        CheckBoxPage.visit();

    });

    it('Should select a specific checkbox', () => {

        CheckBoxPage.expandNode('Home')
        CheckBoxPage.expandNode('Desktop')
        CheckBoxPage.selectNode('Notes')
        CheckBoxPage.assertNodeIsSelected('Notes');


    });

    it('Should select a parent checkbox and its child options', () => {

       CheckBoxPage.expandNode('Home')
       CheckBoxPage.expandNode('Documents')
       CheckBoxPage.selectNode('Documents')
       CheckBoxPage.assertNodeIsSelected('WorkSpace')
       CheckBoxPage.assertNodeIsSelected('Office')
       

    });
});