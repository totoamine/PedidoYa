describe('Pedidoo de empanadas', () => {
    beforeEach(() => {
        cy.visit('https://stg-authenticate.pedidosya.com/?c=.ar&loginFrom=cGVkaWRvc3lhLXdlYg%3D%3D')

    })

    it('ingresara pedidoya', () => {
        cy.get("#login_continue_with_other_method").click()

        
    })
})