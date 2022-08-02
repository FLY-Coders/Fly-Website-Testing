describe('Initial page render test', () => { 
    before('Acessing the FLY Website', () => {
        cy.visit('https://dev-flycoders.netlify.app/')
    })
    it('Check components', () => {
        cy.get('.hero-logo').as('FLY logo').should('be.visible')
        cy.get('.hero-paragraph').as('A tec company').should('be.visible')
        cy.get('.hero-kanji').as('FLY Kanji').should('be.visible')
        cy.get('[href="#about-us"]').as('About us navbar button').should('be.visible')
        cy.get('[href="#projects"]').as('Projects navbar button').should('be.visible')
        cy.get('[href="#our-team"]').as('Our team button').should('be.visible')
    })
 })