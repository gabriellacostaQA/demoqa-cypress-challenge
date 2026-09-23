import WebtablesPage from '../../pages/WebtablesPage';

describe('Web Tables', () => {

    beforeEach(() => {

        WebtablesPage.visit();

    });

    it('Should validate an existing table record', () => {

        const firstName= 'Cierra';
        const lastName= 'Vega';
        const age= '39';
        const email= 'cierra@example.com';
        const salary= '10000';
        const department= 'Insurance';

        WebtablesPage.assertRowData(firstName, lastName, age, email, salary, department);
          

    });

    it('Should create a new table record', () => {

        const firstName= 'Gabriella';
        const lastName= 'Costa';
        const age= '26';
        const email= 'gabriella@example.com';
        const salary= '20000';
        const department= 'QA';

        WebtablesPage.buttonAdd()
        WebtablesPage.fillFirstName('Gabriella')
        WebtablesPage.fillLastName('Costa')
        WebtablesPage.fillEmail('gabriella@example.com')
        WebtablesPage.fillAge('26')
        WebtablesPage.fillSalary('20000')
        WebtablesPage.fillDepartment('QA');
        WebtablesPage.buttonSubmit();
        WebtablesPage.assertRowData(firstName, lastName, age, email, salary, department);
            
    });

    it('Should edit an existing table record', () => {

        const firstName= 'Alden';
        const lastName= 'Cantrell';
        const age= '45';
        const email= 'alden@test.com';
        const salary= '12000';
        const department= 'Compliance';

        WebtablesPage.editRecord('Alden');
        WebtablesPage.fillEmail('alden@test.com')
        WebtablesPage.buttonSubmit();
        WebtablesPage.assertRowData(firstName, lastName, age, email, salary, department);
     
    });

    it('Should delete an existing table record', () => {

        WebtablesPage.deleteRecord('Kierra');
        WebtablesPage.getRowByName('Kierra').should('not.exist');

    });





});