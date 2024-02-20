/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar o produto da lista', () => {
        cy.get('.product-block')
        .first()    
        .click()    
        
    });
});