/// <reference types="cypress" />

const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {
    
    acessarFormularioDeNovaPublicacao(){        
        cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormulario(){
       
        cy.get(el.inputTitle).type(`Title-${faker.random.words(3)}`)
        cy.get(el.inputDescription).type(faker.random.words(5))
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('cypress')
    }
    
    submeterPublicacao(){

        cy.get(el.buttonSubmit).click()
    }

    verificarSeAPuboicacaoFoiCriadaComSucesso(){
        
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