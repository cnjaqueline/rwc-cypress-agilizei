/// <reference types="cypress" />

const faker = require('faker')
const el = require('./elements').ELEMENTS
const publicacao = {
    title: `Title-${faker.random.words(3)}`,
    description: faker.random.words(5),
    content: faker.lorem.paragraph()
}

import Routes from '../../routes'

class Articles {
    
    acessarFormularioDeNovaPublicacao(){        
        cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormulario(){
       
        cy.get(el.inputTitle).type(publicacao.title)
        cy.get(el.inputDescription).type(publicacao.description)
        cy.get(el.textAreaContent).type(publicacao.content)
        cy.get(el.inputTags).type('cypress')
    }
    
    submeterPublicacao(){

        cy.get(el.buttonSubmit).click()
    }

    verificarSeAPublicacaoFoiCriadaComSucesso_gui(){
        cy.get(el.titlePublished).should('contain', publicacao.title)
        cy.get(el.author)
            .first()
            .should('contain', 'jaqueline_agilizei')
    }

    verificarSeAPublicacaoFoiCriadaComSucesso_api(){
        
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.response.statusCode).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.response.statusCode).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments) => {
            expect(getArticlesTitleComments.response.statusCode).to.eq(200)
        })
    }
        
    
    
}

export default new Articles()