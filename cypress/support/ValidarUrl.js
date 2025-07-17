Cypress.Commands.add('acessarPaginaInicial', function () {
  cy.visit('https://www.saucedemo.com/');
  cy.title().should('be.equal', 'Swag Labs', { timeout: 15000 });
  cy.url().should('be.equal', 'https://www.saucedemo.com/');
});