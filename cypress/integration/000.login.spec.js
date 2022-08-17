describe('Login', () => {
  it('It shloud login in voluum with fake auth - defined on .env', () => {

    cy.visit('http://localhost:3000/')

    // login
    cy.get('button:nth-child(2)').click()


    cy.url().should('include', '/signin')

    //input labels.
    cy.get('.provider > form:nth-child(1) > div:nth-child(2) > label:nth-child(1)').contains('email')





    //use .env auth
    cy.get("#input-email-for-voluum-provider").type("123");
    cy.get("#input-password-for-voluum-provider").type("123");


    //submit the form
    cy.get(".provider > form:nth-child(1) > button:nth-child(4)").click();
    //cy.wait(3);

    //visit logged in page
    cy.visit("http://localhost:3000/pages/page-1");
    cy.url().should('include', 'page-1')


  });
  it('It shloud login with fake auth', () => {
    cy.clearCookies();
    cy.visit('http://localhost:3000/')

    // login
    cy.get('button:nth-child(2)').click();


    cy.url().should('include', '/signin');


    //submit the form
    cy.get(".provider > form:nth-child(1) > button:nth-child(4)").click();
    //cy.wait(3);

    //visit logged in page
    cy.visit("http://localhost:3000/pages/page-1");
    cy.url().should('include', 'page-1')


  });

});