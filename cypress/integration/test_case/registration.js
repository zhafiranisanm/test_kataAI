context('Registration on Kata.ai', () => {
  beforeEach(() => {
      cy.visit('https://user.kata.ai/signup/')
      cy.viewport(1024, 768);
  })

  it('User Register Professional account with valid input', () => {
      
    //register new account
    cy.get('input[type="text"]').eq(0).should('have.attr','placeholder','Username').click()
    .type(Cypress.env('USERNAME'))
    .get('input[type="email"]').should('have.attr','placeholder','Email address').click()
    .type(Cypress.env('EMAIL'))
    .get('.sc-Axmtr.kMmUCq', {force: true}).contains('Professional').click().should('be.visible')
    .get('input[class="sc-fzoYHE iPqtIx"]').eq(2).should('have.attr','placeholder','Company').click()
    .type(Cypress.env('COMPANY'))
  })

  it('User Register Professional account with invalid input', () => {
        
    //register new account
    cy.get('input[type="text"]').eq(0).should('have.attr','placeholder','Username').click()
    .type('<h1> hello </h1>')
    .get('input[type="email"]').should('have.attr','placeholder','Email address').click()
    .type('test@123@123!@#')
    .get('.sc-Axmtr.kMmUCq', {force: true}).contains('Professional').click().should('be.visible')

  //assert warning text appeared
    .get('.sc-AxjAm.izWAmF').children('.sc-Axmtr.fiNHqw').contains('Please enter a valid username. A username should only contain alphanumeric characters, hyphens and underscores (no spaces).').should('be.visible')
    .get('.sc-AxjAm.izWAmF').children('.sc-Axmtr.fiNHqw').contains('Invalid email format.').should('be.visible')
    .get('input[class="sc-fzoYHE iPqtIx"]').should('have.attr','placeholder','Company').click()
    .type('not valid text <p> hi </p>')
    .get('input[class="sc-fzoYHE iPqtIx"]').should('have.attr','placeholder','Company').click()
    .type("not valid text <p> hi </p>")
    .get('button[type="submit"]').should('be.disabled')
  })

  it('User Register Stundent account with valid input', () => {
        
    //register new account
    cy.get('input[type="text"]').eq(0).should('have.attr','placeholder','Username').click()
    .type(Cypress.env('USERNAME'))
    .get('input[type="email"]').should('have.attr','placeholder','Email address').click()
    .type(Cypress.env('EMAIL'))
    .get('.sc-Axmtr.kMmUCq', {force: true}).contains('Student').click().should('be.visible')
    .get('input[class="sc-fzoYHE iPqtIx"]').eq(2).should('have.attr','placeholder','School').click()
    .type(Cypress.env('SCHOOL'))
  })

  it('User Register Student account with invalid input', () => {
      
  //register new account
  cy.get('input[type="text"]').eq(0).should('have.attr','placeholder','Username').click()
  .type('<h1> hello </h1>')
  .get('input[type="email"]').should('have.attr','placeholder','Email address').click()
  .type('test@123@123!@#')
  .get('.sc-Axmtr.kMmUCq', {force: true}).contains('Student').click().should('be.visible')

  //assert warning text appeared
  .get('.sc-AxjAm.izWAmF').children('.sc-Axmtr.fiNHqw').contains('Please enter a valid username. A username should only contain alphanumeric characters, hyphens and underscores (no spaces).').should('be.visible')
  .get('.sc-AxjAm.izWAmF').children('.sc-Axmtr.fiNHqw').contains('Invalid email format.').should('be.visible')
  .get('input[class="sc-fzoYHE iPqtIx"]').should('have.attr','placeholder','School').click()
  .type('<p> test test test </p>')
  
  //assert button submit should be disaled
  .get('button[type="submit"]').should('be.disabled')
  })


})