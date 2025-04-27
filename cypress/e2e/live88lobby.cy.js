describe('Live88 Lobby UI tests', () => {
  beforeEach(() => {
    cy.visit('https://static.live88.io/game/ld-client/latest/index.html?config_id=65ae3b3ff098df4e79a999e7&session_id=0c501af5-fe39-4689-aed9-c7d03b4adc50&lobby_url=&deposit_url=&device_platform=desktop&engine_base_url=wss://app.live88.io&sub_partner_id=otcasino&lang=en&ts=1745759065776');
 // NOTE: This link may expire. If the page shows blank, update the link manually.
  });


  it('Check that LIVE88 LOGO has correct size', () => {
    cy.get('div.operator-logo', { timeout: 15000 })
      .should('be.visible')
      .invoke('width')
      .should('eq', 157.6875);
    cy.get('div.operator-logo')
      .invoke('height')
      .should('eq', 157.6875);
  });

  it('Check that front-page menu has correct listing', () => {
    cy.get('nav.menu-component.front-page', { timeout: 15000 }).should('be.visible');

    cy.get('nav.menu-component.front-page').find('span.category-home').should('exist');
    cy.get('nav.menu-component.front-page').find('span.category-highrollers').should('exist');
    cy.get('nav.menu-component.front-page').find('span.category-baccarat').should('exist');
    cy.get('nav.menu-component.front-page').find('span.category-dragonTiger').should('exist');
    cy.get('nav.menu-component.front-page').find('span.category-indianGames').should('exist');
    cy.get('nav.menu-component.front-page').find('span.category-poker').should('exist');
    cy.get('nav.menu-component.front-page').find('span.category-favourites').should('exist');
  });

  it('Check if the menu hover effect works', () => {
    cy.get('nav.menu-component.front-page', { timeout: 15000 })
      .find('span.category-highrollers')
      .trigger('mouseover')
      .should('have.css', 'color', 'rgb(178, 146, 101)');
    cy.get('nav.menu-component.front-page')
      .find('span.category-baccarat')
      .trigger('mouseover')
      .should('have.css', 'color', 'rgb(178, 146, 101)');
    cy.get('nav.menu-component.front-page')
      .find('span.category-roulette')
      .trigger('mouseover')
      .should('have.css', 'color', 'rgb(178, 146, 101)');
    cy.get('nav.menu-component.front-page')
      .find('span.category-dragonTiger')
      .trigger('mouseover')
      .should('have.css', 'color', 'rgb(178, 146, 101)');
    cy.get('nav.menu-component.front-page')
      .find('span.category-poker')
      .trigger('mouseover')
      .should('have.css', 'color', 'rgb(178, 146, 101)');
    cy.get('nav.menu-component.front-page')
      .find('span.category-favourites')
      .trigger('mouseover')
      .should('have.css', 'color', 'rgb(178, 146, 101)');
  });

  it('Check the Motion Roulette game opens correctly', () => {
    cy.get('div.carousel-container.tables-list', { timeout: 15000 })
      .find('div.lobby-item-component.roulette.roulette-variation.r-motion.front-page.custom-bg')
      .trigger('mouseover')
      .within(() => { 
        cy.contains('Join table').click({ force: true });
      
      });
  });
});
