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

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('sparta gym tank')
        cy.get('.product.title').should('contain','sparta gym tank')
    });

    it.only('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho()

        cy.get('.woocommerce-message').should('contain','2 × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')

    });
});