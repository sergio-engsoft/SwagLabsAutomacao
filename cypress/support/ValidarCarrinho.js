Cypress.Commands.add('adicionarProdutoAoCarrinho', function () {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('be.visible')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    
})
Cypress.Commands.add('removerProdutoDoCarrinho', function () {
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
})
Cypress.Commands.add('removerProdutoDentroDoCarrinho', function () {
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').click()
})
Cypress.Commands.add('adicionarSegundoProdutoAoCarrinho', function () {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_badge').should('be.visible')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    cy.get('#shopping_cart_container > a').invoke('text').should('eq', '2');
})
Cypress.Commands.add('acessarCarrinhoComItens', function () {
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').click()
    cy.get('[data-test="inventory-item-name"]').should('be.visible')
})
Cypress.Commands.add('voltarAListaDeProdutos', function () {
    cy.get('[data-test="continue-shopping"]').should('be.visible').click()
    cy.url().should('include', '/inventory.html')
})