/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'


context('Publicação', () => {
    // hooks -> momentos antes / depois do teste
    beforeEach(() => {
        // Arrange
        
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPublicacao()
    })
    it('Criar uma nova publicação', () => {
        // Act
        articles.preencherFormulario()
        articles.submeterPublicacao()
        
        // Assert
        articles.verificarSeAPublicacaoFoiCriadaComSucesso_gui()
        articles.verificarSeAPublicacaoFoiCriadaComSucesso_api()
    })
});