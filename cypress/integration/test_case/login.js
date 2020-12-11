context('User Login to Kata.ai Platform', () => {
    beforeEach(() => {
      cy.visit('https://platform.kata.ai/login')
      cy.viewport(1024, 768);
    })

    it('User login with valid email and password', () =>{
        
      //login with valid email and password
      cy.get('input[type="text"]').should('have.attr','placeholder','Username').click()
      .type(Cypress.env('USERNAME'))
      .get('input[type="password"]').should('have.attr','placeholder','Password').click()
      .type(Cypress.env('PASSWORD'))
      .get('#remember-me').click().should('be.checked')
      .get('button[type="submit"]').should('be.visible').click()

    })

    it('User login with invalid email and password', () =>{
        
      //login with invalid email and password
      cy.get('input[type="text"]').should('have.attr','placeholder','Username').click()
      .type("testest   asdasasd  ??")
      .get('input[type="password"]').should('have.attr','placeholder','Password').click()
      .type("     ")
      .get('#remember-me').click().should('be.checked')
      .get('button[type="submit"]').should('be.visible').click()


      //assert warning text
      .get('.sc-pkhIR.hgECfS').contains("Invalid username or password").should('be.visible')

    })

    it('User login with invalid email and password, failed few times', () =>{
  
      //login with valid email and password
      cy.get('input[type="text"]').should('have.attr','placeholder','Username').click()
      .type("testest   asdasasd  ??")
      .get('input[type="password"]').should('have.attr','placeholder','Password').click()
      .type("     ")
      .get('#remember-me').click().should('be.checked')
      .get('button[type="submit"]').should('be.visible').click()

      //try to automate login, blocked for 900s
      .get('.sc-pkhIR.hgECfS').contains("You're blocked for 900 seconds").should('be.visible')

    })

    it('User login with empty email and password', () =>{
            
      //login with empty email and password
      cy.get('input[type="text"]').should('have.attr','placeholder','Username').click()
      .type("")
      .get('input[type="password"]').should('have.attr','placeholder','Password').click()
      .type("")
      .get('#remember-me').click().should('be.checked')
      .get('button[type="submit"]').should('be.visible').click()

      //assert warning text
      .get('.sc-pkhIR.hgECfS').contains("Invalid username or password").should('be.visible')

    })

    it('User login with empty email and password, few times', () =>{
            
      //login with empty email and password
      cy.get('input[type="text"]').should('have.attr','placeholder','Username').click()
      .type("")
      .get('input[type="password"]').should('have.attr','placeholder','Password').click()
      .type("")
      .get('#remember-me').click().should('be.checked')
      .get('button[type="submit"]').should('be.visible').click()

      //try to automate login, blocked for 900s
      .get('.sc-pkhIR.hgECfS').contains("You're blocked for 900 seconds").should('be.visible')

    })




})