/// <reference types="cypress" />

describe('Esperas...', () => {

    before( () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach( () => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponiveç', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funcionou')
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li').find('span')
        .should('contain', 'Item 1')

        cy.get('#lista li span')
        .should('contain', 'Item 2')
    })
})