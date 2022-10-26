describe('mounted spec', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:3000')
  })
  it('should have a h1-tag, p-tag and button', () => {
		cy.get('h1').should('have.text', ' Welcome to Vue KanBan ')
		cy.get('p').should('have.text', ' An OpenSource KanBan board built by Kromate in Vue ')
		cy.get('button').should('have.text', ' Sign in  Create Board ')
		cy.get('a').should('have.text', ' Demo  Github ')
	})
})
