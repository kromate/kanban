describe('mounted spec', () => {
	it('Visits the app root url', () => {
		cy.visit('http://localhost:3000')
	})
	it('should have a h1-tag, p-tag and button', () => {
		cy.get('h1').should('have.text', ' Welcome to Vue KanBan ')
		cy.get('p').should(
			'have.text',
			' An OpenSource KanBan board built by Kromate in Vue '
		)
		cy.get('button').should('have.text', ' Sign in ')
		cy.get('a').should('have.text', ' Demo  Github ')
	})

	it('Demo page should open', () => {
		cy.get('#demo-btn').click()
		cy.url().should('include', '/demo')
	})

	it('edit features should not be working on demo page', () => {
		cy.get('#add-btn').click()
		cy.get('#alert').should('have.text', 'This feature is not available in demo mode')
	})
})
