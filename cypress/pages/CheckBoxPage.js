class CheckBoxPage {
    visit() {
        cy.visit('/checkbox');
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

    expandNode(nodeName) {
        cy.get(`span[title="${nodeName}"]`)
            .closest('[role="treeitem"]')
            .find('.rc-tree-switcher')
            .click();

        return this;
    }

    selectNode(nodeName) {
        cy.get(`[aria-label="Select ${nodeName}"]`).click();
        return this;
    }



    //Assertions
    assertNodeIsSelected(nodeName) {
        cy.get(`[aria-label="Select ${nodeName}"]`)
            .should('have.attr', 'aria-checked', 'true');

        return this;
    }







}

export default new CheckBoxPage();