/// <reference types="cypress" />

import loc from '../../../support/locators'

describe('Teste funcionais', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Making a Purchase', function () {
        cy.fixture('userData').as('usuario').then(() => {
            cy.get(loc.PESQUISARPRODUTO.ESCREVERNOMEPRODUTO).type('Printed Dress')
            cy.get(loc.PESQUISARPRODUTO.BOTAOPESQUISAR).click()
            cy.get(loc.CLICARNOMEDOPRODUTO.PRODUTO).click()        
            cy.get(loc.SELECIONARTAMANHO.TAMANHO).select('M')
            cy.get(loc.ADDPRODUTONOCARRINHO.CLICARBOTAO).click()
            cy.get(loc.ADDPRODUTONOCARRINHO.DESEJAPROSSEGUIR).click()
            cy.get(loc.VALIDARCARRINHO.CART).should('have.length', 1)
            cy.get(loc.VALIDARCARRINHO.CART).click()
            cy.get(loc.FAZERCHECKOUT.PROSSEGUIR).click()
            //realizando o login;
            cy.get(loc.LOGIN.EMAIL).type(this.usuario.email)
            cy.get(loc.LOGIN.PASSWORD).type(this.usuario.senha)
            cy.get(loc.LOGIN.BOTAOLOGIN).click()
            cy.get(loc.FAZERCHECKOUT.PROSSEGUIR).click()
            cy.get(loc.SELECIONARCHECKBOX.CHECKBOX).click()
            cy.get(loc.FAZERCHECKOUT.PROSSEGUIR).click()
            cy.get(loc.FORMADEPAGAMENTO.SELECIONAR).click()
            cy.get(loc.CONFIRMARCOMPRA.CONFIRMAR).click()

            cy.get(loc.VALIDARMENSAGEM.MENSAGEM).should('contain', 'Your order on My Store is complete.')
        })
    })
})