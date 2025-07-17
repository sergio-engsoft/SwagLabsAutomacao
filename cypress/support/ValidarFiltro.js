Cypress.Commands.add('ordenarPorNomeAZ', function () {
    cy.get('.product_sort_container').select('Name (A to Z)');
    cy.get('.inventory_item_name').then($names => {
        const names = $names.map((_, el) => Cypress.$(el).text()).get();
        const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
        expect(names).to.deep.equal(sortedNames);
    });
});
Cypress.Commands.add('ordenarPorNomeZA', function () {
    cy.get('.product_sort_container').select('Name (Z to A)');
    cy.get('.inventory_item_name').then($names => {
        const names = $names.map((_, el) => Cypress.$(el).text()).get();
        const sortedNames = [...names].sort((a, b) => b.localeCompare(a));
        expect(names).to.deep.equal(sortedNames);
    });
});
Cypress.Commands.add('ordenarPorPrecoLowtoHigh', function () {
    cy.get('.product_sort_container').select('Price (low to high)');
    cy.get('.inventory_item_price').then($prices => {
        const prices = $prices.map((_, el) => Cypress.$(el).text()).get();
        const sortedPrices = [...prices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')));
        expect(prices).to.deep.equal(sortedPrices);
    });
});
Cypress.Commands.add('ordenarPorPrecoHightoLow', function () {
    cy.get('.product_sort_container').select('Price (high to low)');
    cy.get('.inventory_item_price').then($prices => {
        const prices = $prices.map((_, el) => Cypress.$(el).text()).get();
        const sortedPrices = [...prices].sort((a, b) => parseFloat(b.replace('$', '')) - parseFloat(a.replace('$', '')));
        expect(prices).to.deep.equal(sortedPrices);
    });
});