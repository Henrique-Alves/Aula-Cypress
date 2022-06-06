/// <reference types="cypress" />


describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = { nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($el => {
            cy.wrap($el).type('funciona via cypress')
        })

    })

    it('Its...', () => {
        const obj = { nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')
    })

    it('Invoke...', () => {
        const soma = (a, b) => a + b;
        
        cy.wrap({fn: soma}).invoke('fn', 2, 5 ).should('be.equal', 7)
    })
})