/// <reference types="Cypress" />
describe('Fluxo de Ordenação de Produtos no Site Swag Labs', function () {
    beforeEach(function () {
        cy.acessarPaginaInicial()
        cy.loginValido();
    })
    it('Ordenar Produtos por Name (A-Z)', function () {
        cy.ordenarPorNomeAZ()
    })
    it('Ordenar Produtos por Name (Z-A)', function () {
        cy.ordenarPorNomeZA()
    })
    it('Ordenar Produtos por Preço (Low to High)', function () {
        cy.ordenarPorPrecoLowtoHigh()
    })
    it('Ordenar Produtos por Preço (High to Low)', function () {
        cy.ordenarPorPrecoHightoLow()
    })
    it('Validar Informações de Produtos na Lista', function () {
        cy.validarListaDeProdutos()
    })
    it('Acessar Página de Detalhes do Produto', function () {
        cy.acessarPaginaDeDetalhesDoProduto()
    })
})