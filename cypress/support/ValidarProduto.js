Cypress.Commands.add('validarListaDeProdutos', function () {
    cy.get('.inventory_list > :nth-child(1)').should('be.visible')
})
Cypress.Commands.add('acessarPaginaDeDetalhesDoProduto', function () {
    cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').should('be.visible').click()
    cy.get('[data-test="inventory-item-name"]').should('be.visible')
    cy.get('[data-test="inventory-item-price"]').should('be.visible')
    cy.get('[data-test="inventory-item-desc"]').should('be.visible')
})