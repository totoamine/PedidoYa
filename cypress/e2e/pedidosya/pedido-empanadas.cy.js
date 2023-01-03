describe('Pedidoo de empanadas', () => {
    it('navigates', () => {
        cy.visit('https://stg-mweb.pedidosya.com.ar/?externalLogin=true')
        cy.get('.sc-zcdqso-0').click()
        cy.get('.Drawer__RegisterOrLoginItemContainer-sc-1px2swd-2 > .NavigationItem__Container-sc-5dt1fu-0 > .NavigationItem__Label-sc-5dt1fu-1').click()
        cy.wait(5000)
        cy.origin('https://stg-authenticate.pedidosya.com', () => {
        cy.get("#login_continue_with_other_method").click()
        cy.wait(5000)
        cy.get("#irl__layout > div > footer > div > div.sc-1720ji0-0.fszExM > div > div > div > div > button.sc-1ll55jz-3.ezAmHT.SimpleButton__StyledButton-sc-tto1dw-0.jEphnj").click()
        cy.get("body > div:nth-child(13) > div > div > div.sc-1l5qyiw-0.bTIfvP > div.sc-r6r8k4-0.dbDWLG > button").click()
        cy.get("#login_email_input").type("testargentina5@gmail.com")
        cy.get("#login_password_input").type("argentina")
        cy.get('.SimpleButton__StyledButton-sc-tto1dw-0').click()
      })
        cy.get('.sc-zcdqso-0').click()
        cy.get('.Header__StickyHeader-sc-1rvn1j5-0 > :nth-child(1)').click()
        cy.get('[href="/addresses"] > .NavigationItem__Container-sc-5dt1fu-0 > .NavigationItem__Label-sc-5dt1fu-1').click()
        cy.get('[data-testid="address_item_25686724"] > .LocationListItem__Suggestion-sc-21dkqd-5').click()
        cy.get(':nth-child(18) > .HorizontalListstyles__Div-sc-1z0g9rg-1 > [data-testid="large_card_variation_test_id"] > .LargeCardVariationstyles__CardInfoDiv-sc-pf4s9f-8 > .LargeCardVariationstyles__TopInfoContainer-sc-pf4s9f-9 > .LargeCardVariationstyles__TitleDiv-sc-pf4s9f-5 > .LargeCardVariationstyles__H3-sc-pf4s9f-11').click()
  })

      })
        