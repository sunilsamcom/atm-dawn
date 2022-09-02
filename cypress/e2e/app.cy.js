describe('Navigation Session', () => {
  it('should navigate to the login page', () => {
    // Start from the index page
    cy.visit('http://127.0.0.1:3000/pages/page-1');

    // cy.get('h1').contains('Please login:');

    // cy.get('#__next');
    // .contains("Not signed in")
    // cy.get('#signIn').click();
    // .contains("Sign in")

    // cy.get('#input-email-for-voluum-provider').type('jaldhisamcom@gmail.com');
    // cy.get('#input-password-for-voluum-provider').type('Samcom@84');
    // cy.get('form').contains('form', 'Sign in with Voluum').submit();

    // cy.get('.hello');
    // cy.get('.signed_user');
    // cy.get('.token');
    cy.get('nav');
    cy.get('.nav_links');
    cy.contains('Dashboard').click();
    // cy.contains("Campaigns and source Report").click()
    cy.contains('Page 2').click();
    cy.contains('Page 3').click();
    cy.contains('Page 4').click();
    cy.contains('Page 5').click();
    cy.contains('Reports').click();
    // cy.get('.notification').click();
    // cy.get('.setting').click();
    cy.get('.icon').click();
    cy.contains('Your Profile').click();

    // // Reference default test
    // // Find a link with an href attribute containing "docs" and click it
    // cy.get('a[href*="docs"]').click()
    //
    // // The new url should include "/docs"
    // cy.url().should('include', '/docs')
    //
    // // The new page should contain an h1 with "Next.js"
    // cy.get('h1').contains('Next.js')
    // // The new page should also contain an h1 with ""
    // cy.get('h1').contains('Getting Started')
  });
});
