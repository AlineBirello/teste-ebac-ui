/// <reference tyoe="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('birello.teste@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, birello.teste (não é birello.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('birelo.teste@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should ('contain' , 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
    });

    it.only('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('birello.teste@teste.com.br')
        cy.get('#password').type('teste13')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should ('contain' , 'Erro: A senha fornecida para o e-mail birello.teste@teste.com.br está incorreta. Perdeu a senha?')
    });

})