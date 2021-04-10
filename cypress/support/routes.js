class Routes {

as = {
    postArticles: 'POSTArticles',
    getArticlesTitle: 'GETArticlesTitle',
    getArticlesTitleComments: 'GETArticlesTitleComments',

    postUser: 'POSTUser',
    getTags: 'GETTags',
    getFeeds: 'GETFeeds'
}

    init(){
        cy.intercept('POST', '**/api/articles').as(this.as.postArticles)
        cy.intercept('GET', '**/api/articles/title**').as(this.as.getArticlesTitle)
        cy.intercept('GET', '**/api/articles/title**/comments').as(this.as.getArticlesTitleComments)

        cy.intercept('POST', '**/api/users').as(this.as.postUser)
        cy.intercept('GET', '**/api/tags').as(this.as.getTags)
        cy.intercept('GET', '**/api/articles/feed**').as(this.as.getFeeds)
    }
}

// initMocks(){
//     cy.intercept('POST', '', {
//         statusCode: 200,
//         body: {}
//     }).as(this.a.postArticles)
// }

export default new Routes()
