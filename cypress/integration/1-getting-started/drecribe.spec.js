/// <reference types="cypress" />


/* "only" é para executar apenas esse teste.
obs: só executa o ultimo only dentro do arquivo. */
it.only('A external test...', () => {

});

/* "skip" é para não executar um grupo de teste ou um teste
específico */

describe('Should group test...', ()=> {
    describe('Should group more specific tests...', () => {
        it.skip('A specific test', () => {

        });
    })
    it('A internal test', () => {

    });
});