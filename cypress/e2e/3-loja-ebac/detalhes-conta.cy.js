/// <reference types="cypress"/>

describe('Funcionalidade: detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login('birello.teste@teste.com.br', 'teste123')

    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('teste', 'Birello', 'birello.qa')
    });

});
