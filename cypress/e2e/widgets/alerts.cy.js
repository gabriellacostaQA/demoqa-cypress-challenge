import AlertsPage from '../../pages/AlertsPage';

describe('Alerts', () => {

    beforeEach(() => {
        AlertsPage.visit();
    });

    it('Should handle a simple alert', () => {
        AlertsPage.simpleAlert();
    });

    it('Should handle a confirmation dialog when clicking OK', () => {
        AlertsPage.confirmationDialog(true);
    });

    it('Should handle a confirmation dialog when clicking Cancel', () => {
        AlertsPage.confirmationDialog(false);
    });

    it('Should handle a prompt dialog when submitting a value', () => {

        AlertsPage.promptDialog('Test');
    });

});