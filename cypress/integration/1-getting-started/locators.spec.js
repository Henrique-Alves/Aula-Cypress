/// <reference types="cypress" />


describe('Work with basic elements', () => {
    beforeEach( () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('using xpath', () => {
        cy.xpath('//input')
    })

});