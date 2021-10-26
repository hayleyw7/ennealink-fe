Cypress.Commands.add('loadApp', () => {
  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('loadExistingUserPage', () => {
  cy.visit('http://localhost:3000')
    .get('button[class="create-btn"]')
      .click()
})

Cypress.Commands.add('loadEditProfilePage', () => {
  cy.visit('http://localhost:3000')
  it('should allow typing in inputs', () => {
    cy.get('input[class="login-input login-username"]')
      .type('a')
    .get('input[class="login-input password-1"]')
      .type('b')
    .get('input[class="login-input password-2"]')
      .type('b')
    .get('button[class="submit-btn next"]')
      .click()
  });  
})

// dynamic stubbing

// Cypress.Commands.add('interceptAPI', (fixturePage, url) => {
//   cy.intercept(`${url}`, {
//     fixture: `${fixturePage}_test_data.json`,
//   })
// })

// stubbing endpoints

// Cypress.Commands.add('loadProfile', (g) => {
//   cy.loadApp()
//     .interceptAPI('profile', 'http://localhost:4500/graphql')
// })

