/// <reference types="cypress"/>
import produtosPage from "../../support/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar o produto da lista', () => {
      produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
            cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {


    });

    it('Deve adicionar produto ao carrinho', () => {

    });
});