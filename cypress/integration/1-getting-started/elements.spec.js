/// <reference types="cypress" />

describe('Work with basic elements', () => {
    beforeEach( () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Text', () => {
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
        
    })

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem').click()
        .should('be.checked')
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza').click()
        .should('be.checked')
    })

    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
        .select('2o grau completo')
        .should('have.value', '2graucomp')
    })

    it('Combo Multiplo', () => {
        cy.get('[data-testid="dataEsportes"]')
        .select(['natacao', 'Corrida'])

    })
});