/// <reference types="Cypress" />
describe('Fluxo de Checkout no site Swag Labs', function () {
    this.beforeEach(function () {
        cy.acessarPaginaInicial()
        cy.loginValido()
        cy.adicionarProdutoAoCarrinho()
        cy.acessarCarrinhoComItens();
    })

    it('Validação do checkout', function () {
        cy.iniciarCheckout()
    })

    it('Preencher informações do cliente e prosseguir', function () {
        cy.iniciarCheckout()
        cy.preencherInformacoesCorretamente()
    })
    it('Finalizar compra com Sucesso', function () {
        cy.iniciarCheckout()
        cy.preencherInformacoesCorretamente()
        cy.finalizarCompraComSucesso()
    })
    it('Erro ao Deixar First Name Vazio No Checkout', function () {
        cy.iniciarCheckout()
        cy.deixarFirstNameVazio()
    })
    it('Erro ao Deixar Last Name Vazio No Checkout', function () {
        cy.iniciarCheckout()
        cy.deixarLastNameVazio()
    })
    it('Erro ao Deixar Postal Code Vazio No Checkout', function () {
        cy.iniciarCheckout()
        cy.deixarPostalCodeVazio()
    })
    it('Cancelar o Checkout e Voltar ao Carrinho', function () {
        cy.iniciarCheckout()
        cy.cancelarCheckout()
    })


















})