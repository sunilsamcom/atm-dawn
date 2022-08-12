describe('Navigation Session', () => {
  it('should navigate to the login page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('h1').contains('Please login:')

    cy.visit('http://localhost:3000/page1', { failOnStatusCode: false })

    cy.get('h1').contains('404')
    cy.get('h2').contains('This page could not be found.')

    cy.visit('http://localhost:3000/')

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
  })
})
