/// <reference types="cypress" />

const faker = require('faker')
const el = require('./elements').ELEMENTS
const newUser = {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    password: '12345678'
}

import Routes from '../../routes'

class Register {
    
    acessarFormularioDeCadastro(){        
        cy.visit(el.linkCadastro)
    }

    preencherDadosUsuario(){
       
        cy.get(el.userName).type(newUser.name)
        cy.get(el.userEmail).type(newUser.email)
        cy.get(el.userPassword).type(newUser.password)
    }
    
    inscrever(){
        cy.get(el.buttonSignUp).click()
    }

    verificarSeUsuarioFoiCadastradoComSucesso_gui(){
        cy.get(el.labelName).should('contain', newUser.name)
        cy.get(el.labelNewArticle).should('be.visible')
        cy.get(el.labelSettings).should('be.visible')        
    }

    verificarSeUsuarioFoiCadastradoComSucesso_api(){
        
        cy.wait(`@${Routes.as.postUser}`).then((postUserResponse) => {
            expect(postUserResponse.response.statusCode).to.eq(200)
        })

        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.response.statusCode).to.eq(200)
        })

        cy.wait(`@${Routes.as.getFeeds}`).then((getFeedsResponse) => {
            expect(getFeedsResponse.response.statusCode).to.eq(200)
        })
    }
        
    
    
}

export default new Register()