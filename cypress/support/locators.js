const locators = {

    PESQUISARPRODUTO: {
        ESCREVERNOMEPRODUTO: '#search_query_top',
        BOTAOPESQUISAR: '#searchbox > .btn'
    },

    CLICARNOMEDOPRODUTO: {
        PRODUTO: ':nth-child(2) > .product-container > .right-block > [itemprop="name"] > .product-name'
    },

    SELECIONARTAMANHO: {
        TAMANHO: '#group_1'
    },

    ADDPRODUTONOCARRINHO: {
        CLICARBOTAO: '.exclusive > span',
        DESEJAPROSSEGUIR: '.button-medium > span'
    },

    VALIDARCARRINHO: {
        CART: '[title="View my shopping cart"]'
    },

    FAZERCHECKOUT: {
        PROSSEGUIR: '.cart_navigation > .button > span'
    },

    LOGIN: {
        EMAIL: '#email' ,
        PASSWORD: '#passwd',
        BOTAOLOGIN:'#SubmitLogin > span'
    },

    SELECIONARCHECKBOX: {
        CHECKBOX: '#cgv'
    },

    FORMADEPAGAMENTO: {
        SELECIONAR: '.bankwire'
    },

    CONFIRMARCOMPRA: {
        CONFIRMAR: '#cart_navigation > .button > span'
    }, 

    VALIDARMENSAGEM: {
        MENSAGEM: '.cheque-indent > .dark'
    }
    


}

export default locators;