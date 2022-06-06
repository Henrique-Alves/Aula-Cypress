/// <reference types="cypress" />

describe('Work with alert', () => {
    before( () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach( () => {
        cy.reload()
    })

    it('Alert', () => {
        cy.get('#alert').click();
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    it('Alert com mock', () => {
        const stub = cy.stub().as('alert')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        }) 
    })

    it('Validar mensagens', () => {
        const stub =cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
        .then(() => expect(stub.getCall(0))
        .to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Aderbaldo')
        cy.get('#formCadastrar').click()
        .then(() => expect(stub.getCall(1))
        .to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy="dataSobrenome"]').type('Barros')
        cy.get('#formCadastrar').click()
        .then(() => expect(stub.getCall(2))
        .to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()
        
        cy.get('#resultado > :nth-child(1)')
        .should('contain', 'Cadastrado!')

    })
})