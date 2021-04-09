class Routes {

as = {
    postArticles: 'POSTArticles',
    getArticlesTitle: 'GETArticlesTitle',
    getArticlesTitleComments: 'GETArticlesTitleComments'
}

    init(){
        cy.intercept('POST', '**/api/articles').as(this.as.postArticles)
        cy.intercept('GET', '**/api/articles/title**').as(this.as.getArticlesTitle)
        cy.intercept('GET', '**/api/articles/title**/comments').as(this.as.getArticlesTitleComments)
    }
}

// initMocks(){
//     cy.intercept('POST', '', {
//         statusCode: 200,
//         body: {}
//     }).as(this.a.postArticles)
// }

export default new Routes()