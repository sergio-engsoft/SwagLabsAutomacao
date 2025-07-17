const primeiroNome = 'Usuario'
const ultimoNome = 'Teste'
const CodigoPostal = '38400000'

Cypress.Commands.add('preencherInformacoesCorretamente', function () {
    cy.get('[data-test="firstName"]').type(primeiroNome, { delay: 0 }).should('have.value', primeiroNome)
    cy.get('[data-test="lastName"]').type(ultimoNome, { delay: 0 }).should('have.value', ultimoNome)
    cy.get('[data-test="postalCode"]').type(CodigoPostal, { delay: 0 }).should('have.value', CodigoPostal)
    cy.get('[data-test="continue"]').should('be.visible').click()
    cy.get('.cart_list').should('be.visible')
    cy.get('.summary_total_label').should('be.visible')
})
Cypress.Commands.add('finalizarCompraComSucesso', function () {
    cy.get('[data-test="finish"]').should('be.visible').click()
    cy.get('#checkout_complete_container').should('be.visible')
    cy.get('[data-test="complete-header"]').should('be.visible').should('have.text', 'Thank you for your order!', { timeout: 15000 })
})
Cypress.Commands.add('iniciarCheckout', function () {
    cy.get('.cart_item').should('be.visible')
    cy.get('[data-test="checkout"]').should('be.visible').click()
    cy.get('.checkout_info').should('be.visible')
})
Cypress.Commands.add('deixarFirstNameVazio', function () {
    cy.get('[data-test="lastName"]').type(ultimoNome, { delay: 0 }).should('have.value', ultimoNome)
    cy.get('[data-test="postalCode"]').type(CodigoPostal, { delay: 0 }).should('have.value', CodigoPostal)
    cy.get('[data-test="continue"]').should('be.visible').click()
    cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required', { timeout: 15000 })
})
Cypress.Commands.add('deixarLastNameVazio', function () {
    cy.get('[data-test="firstName"]').type(primeiroNome, { delay: 0 }).should('have.value', primeiroNome)
    cy.get('[data-test="postalCode"]').type(CodigoPostal, { delay: 0 }).should('have.value', CodigoPostal)
    cy.get('[data-test="continue"]').should('be.visible').click()
    cy.get('[data-test="error"]').should('have.text', 'Error: Last Name is required', { timeout: 15000 })
})
Cypress.Commands.add('deixarPostalCodeVazio', function () {
    cy.get('[data-test="firstName"]').type(primeiroNome, { delay: 0 }).should('have.value', primeiroNome)
    cy.get('[data-test="lastName"]').type(ultimoNome, { delay: 0 }).should('have.value', ultimoNome)
    cy.get('[data-test="continue"]').should('be.visible').click()
    cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required', { timeout: 15000 })
})
Cypress.Commands.add('cancelarCheckout', function () {
    cy.get('[data-test="cancel"]').should('be.visible').click()
    cy.get('[data-test="title"]').should('have.text', 'Your Cart', { timeout: 15000 })
})