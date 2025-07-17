/// <reference types="Cypress" />
describe('Fluxo de Login no Site Swag Labs', function () {
    this.beforeEach(function () {
        cy.acessarPaginaInicial();
    })

    it('Login Válido e Acesso aos Produtos', function () {
        cy.loginValido()
    })
    it('Login Falho com Usuário Incorreto', function () {
        cy.loginComUsuarioIncorreto()
    })
    it('Login Falho com Senha Incorreta', function () {
        cy.loginComSenhaIncorreta()
    })
    it('Login Falho com Usuário Bloqueado', function () {
        cy.loginUsuarioBloqueado()
    })
    it('Login Falho com Campo Usuário Vazio', function () {
        cy.loginUsuarioVazio()
    })
    it('Login Falho com Campo Senha Vazio', function () {
        cy.loginSenhaVazio()
    })
    it('Logout da Aplicação', function () {
        cy.loginValido()
        cy.logoutDaAplicacao()
    })
})