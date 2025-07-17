/// <reference types="Cypress" />
describe('Fluxo do Carrinho no Site Swag Labs', function () {
    beforeEach(function () {
        cy.acessarPaginaInicial()
        cy.loginValido();
    })
    it('Adicionar um Produto ao Carrinho', function () {
        cy.adicionarProdutoAoCarrinho()
    })
    it('Remover um Produto do Carrinho', function () {
        cy.adicionarProdutoAoCarrinho()
        cy.removerProdutoDoCarrinho()
    })
    it('Adicionar Multiplos Produtos ao Carrinho', function () {
        cy.adicionarProdutoAoCarrinho()
        cy.adicionarSegundoProdutoAoCarrinho()
    })
    it('Acessar Carrinho Com Itens', function () {
        cy.adicionarProdutoAoCarrinho()
        cy.acessarCarrinhoComItens()
    })
    it('Remover um Produto da Página do Carrinho', function () {
        cy.adicionarProdutoAoCarrinho()
        cy.acessarCarrinhoComItens()
        cy.removerProdutoDentroDoCarrinho()
    })
    it('Voltar à lista de produtos', function () {
        cy.adicionarProdutoAoCarrinho()
        cy.acessarCarrinhoComItens()
        cy.voltarAListaDeProdutos()
    })
})