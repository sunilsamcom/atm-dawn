describe('Navigation 404', () => {
  it('should navigate to the 404 page', () => {
    cy.visit('http://127.0.0.1:3000/a-page-not-found', {
      failOnStatusCode: false,
      retryOnStatusCodeFailure: false
    });

    cy.get('h1').contains('404');
    cy.get('h2').contains('This page could not be found.').end();

    cy.visit('http://127.0.0.1:3000/').end();
  });
});
