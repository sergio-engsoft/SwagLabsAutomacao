const usuario = 'standard_user';
const senha = 'secret_sauce';
const usuarioIncorreto = 'Teste usuario incorreto';
const senhaIncorreta = 'Teste senha incorreta';
const usuarioBloqueado = 'locked_out_user';

Cypress.Commands.add('loginValido', function () {
    cy.get('[data-test="username"]').should('be.visible').type(usuario, { delay: 0 }).should('have.value', usuario)
    cy.get('[data-test="password"]').should('be.visible').type(senha, { delay: 0 }).should('have.value', senha)
    cy.get('#login-button').click()
    cy.get('#inventory_container').should('be.visible')
    cy.url().should('include', '/inventory.html')
})
Cypress.Commands.add('loginComUsuarioIncorreto', function () {
    cy.get('[data-test="username"]').should('be.visible').type(usuarioIncorreto, { delay: 0 }).should('have.value', usuarioIncorreto)
    cy.get('[data-test="password"]').should('be.visible').type(senha, { delay: 0 }).should('have.value', senha)
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    cy.get('[data-test="username"]').clear()
    cy.get('[data-test="password"]').clear()
})
Cypress.Commands.add('loginComSenhaIncorreta', function () {
    cy.get('[data-test="username"]').should('be.visible').type(usuario, { delay: 0 }).should('have.value', usuario)
    cy.get('[data-test="password"]').should('be.visible').type(senhaIncorreta, { delay: 0 }).should('have.value', senhaIncorreta)
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
})
Cypress.Commands.add('loginUsuarioVazio', function () {
    cy.get('[data-test="password"]').should('be.visible').type(senha, { delay: 0 }).should('have.value', senha)
    cy.get('#login-button').click()
    cy.get('.error-message-container').should('be.visible')
    cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Username is required');
})
Cypress.Commands.add('loginSenhaVazio', function () {
    cy.get('[data-test="username"]').should('be.visible').type(usuario, { delay: 0 }).should('have.value', usuario)
    cy.get('#login-button').click()
    cy.get('.error-message-container').should('be.visible')
    cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Password is required');
})
Cypress.Commands.add('loginUsuarioBloqueado', function () {
    cy.get('[data-test="username"]').should('be.visible').type(usuarioBloqueado, { delay: 0 }).should('have.value', usuarioBloqueado)
    cy.get('[data-test="password"]').should('be.visible').type(senha, { delay: 0 }).should('have.value', senha)
    cy.get('#login-button').click()
    cy.get('.error-message-container').should('be.visible')
    cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Sorry, this user has been locked out');
})
Cypress.Commands.add('logoutDaAplicacao', function () {
    cy.get('#react-burger-menu-btn').should('be.visible').click();
    cy.get('.bm-menu').should('be.visible')
    cy.get('#logout_sidebar_link').should('be.visible').click();
    cy.url().should('be.equal', 'https://www.saucedemo.com/');
})