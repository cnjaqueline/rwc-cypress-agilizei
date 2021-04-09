/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', () => {
    it('Realizar login com sucesso', () => {
        login.acessarLogin()
        login.preencherFormulario()
        login.submeterFormulario()
    });
});

//npx cypress run --browser firefox --headless --spec cypress/integration/login.spec.js