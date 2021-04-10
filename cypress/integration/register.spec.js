/// <reference types="cypress" />

const faker = require('faker')
import register from '../support/pages/register'

context('Cadastro', () => {
    
    beforeEach(() => {
        // Arrange
        register.acessarFormularioDeCadastro()
        
    });
    it('Cadastrar um novo usuário', () => {        
        // Act
        register.preencherDadosUsuario()
        register.inscrever()
        
        // Assert
        register.verificarSeUsuarioFoiCadastradoComSucesso_gui()
        register.verificarSeUsuarioFoiCadastradoComSucesso_api()
    });
});