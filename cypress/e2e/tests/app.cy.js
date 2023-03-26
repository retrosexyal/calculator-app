describe('test calcurator app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('testing FC components and add command', () => {
    cy.get('[data-test-id=header]').should('be.visible');
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('2').click();
    cy.get('[data-test-id=displayFC]').should('be.visible').should('have.value', '2');
    cy.get('[data-test-id=keypadFC]').contains('+').click();
    cy.get('[data-test-id=displayFC]').should('have.value', '2+');
    cy.get('[data-test-id=keypadFC]').contains('3').click();
    cy.get('[data-test-id=displayFC]').should('have.value', '2+3');
    cy.get('[data-test-id=keypadFC]').contains('=').click();
    cy.get('[data-test-id=displayFC]').should('have.value', '5');
    cy.get('[data-test-id=historyFC]').should('be.visible').contains('2+3');
  });

  it('testing FC multiply command', () => {
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('1').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('*').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('4').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('=').click();
    cy.get('[data-test-id=displayFC]').should('be.visible').should('have.value', '4');
    cy.get('[data-test-id=historyFC]').should('be.visible').contains('1*4');
  });

  it('testing FC divide command', () => {
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('5').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('/').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('6').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('=').click();
    cy.get('[data-test-id=displayFC]').should('be.visible').should('have.value', '0.833');
    cy.get('[data-test-id=historyFC]').should('be.visible').contains('5/6');
  });

  it('testing FC subtract command', () => {
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('9').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('-').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('8').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('=').click();
    cy.get('[data-test-id=displayFC]').should('be.visible').should('have.value', '1');
    cy.get('[data-test-id=historyFC]').should('be.visible').contains('9-8');
  });

  it('testing FC rod command, key pressed, fractional numbers', () => {
    cy.get('body').type('{0}');
    cy.get('body').type('{.}');
    cy.get('body').type('{3}');
    cy.get('body').type('{%}');
    cy.get('body').type('{.}');
    cy.get('body').type('{6}');
    cy.get('body').type('{enter}');
    cy.get('[data-test-id=displayFC]').should('be.visible').should('have.value', '0.3');
    cy.get('[data-test-id=historyFC]').should('be.visible').contains('0.3%0.6');
  });

  it('testing the transitions', () => {
    cy.get('[data-test-id=header]').should('be.visible').contains('HomeCC').click();
    cy.url().should('include', '/homecc');
    cy.get('[data-test-id=header]').contains('Settings').click();
    cy.url().should('include', '/settings');
    cy.get('[data-test-id=header]').contains('HomeFC').click();
    cy.url().should('eq', 'http://localhost:8080/');
  });

  it('testing theme switcher', () => {
    cy.get('[data-test-id=header]').should('be.visible').contains('Settings').click();
    cy.get('[data-test-id=settings]').should('be.visible');
    cy.get('[data-test-id=select]').should('be.visible').click();
    cy.get('[data-test-id=options]').should('be.visible').contains('Dark theme').click();
    cy.get('[data-test-id=header]').invoke('css', 'background-color').should('equal', 'rgb(38, 36, 36)');
    cy.get('[data-test-id=select]').should('be.visible').click();
    cy.get('[data-test-id=options]').should('be.visible').contains('Colored theme').click();
    cy.get('[data-test-id=header]').invoke('css', 'background-color').should('equal', 'rgb(0, 250, 154)');
    cy.get('[data-test-id=select]').should('be.visible').click();
    cy.get('[data-test-id=options]').should('be.visible').contains('Ligth theme').click();
    cy.get('[data-test-id=header]').invoke('css', 'background-color').should('equal', 'rgb(59, 55, 55)');
  });

  it('testing history cleaning', () => {
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('9').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('-').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('8').click();
    cy.get('[data-test-id=keypadFC]').should('be.visible').contains('=').click();
    cy.get('[data-test-id=displayFC]').should('be.visible').should('have.value', '1');
    cy.get('[data-test-id=historyFC]').should('be.visible').contains('9-8');
    cy.get('[data-test-id=header]').should('be.visible').contains('Settings').click();
    cy.get('[data-test-id=settings]').should('be.visible').contains('Clear all History').click();
    cy.get('[data-test-id=header]').contains('HomeFC').click();
    cy.get('[data-test-id=historyFC]').should('not.contain', '9-8');
  });

  it('testing CC components', () => {
    cy.visit('http://localhost:8080/homecc');
    cy.get('[data-test-id=displayCC]').should('be.visible');
    cy.get('[data-test-id=keypadCC]').should('be.visible');
    cy.get('[data-test-id=header]').should('be.visible');
    cy.get('[data-test-id=historyCC]').should('be.visible');
  });

  it('testing CC multiply command', () => {
    cy.visit('http://localhost:8080/homecc');
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('1').click();
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('*').click();
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('4').click();
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('=').click();
    cy.get('[data-test-id=displayCC]').should('be.visible').should('have.value', '4');
    cy.get('[data-test-id=historyCC]').should('be.visible').contains('1*4');
  });

  it('testing CC divide command', () => {
    cy.visit('http://localhost:8080/homecc');
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('5').click();
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('/').click();
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('6').click();
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('=').click();
    cy.get('[data-test-id=displayCC]').should('be.visible').should('have.value', '0.833');
    cy.get('[data-test-id=historyCC]').should('be.visible').contains('5/6');
  });

  it('testing CC subtract command', () => {
    cy.visit('http://localhost:8080/homecc');
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('9').click();
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('-').click();
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('8').click();
    cy.get('[data-test-id=keypadCC]').should('be.visible').contains('=').click();
    cy.get('[data-test-id=displayCC]').should('be.visible').should('have.value', '1');
    cy.get('[data-test-id=historyCC]').should('be.visible').contains('9-8');
  });

  it('testing CC rod command, key pressed, fractional numbers', () => {
    cy.visit('http://localhost:8080/homecc');
    cy.get('body').type('{0}');
    cy.get('body').type('{.}');
    cy.get('body').type('{3}');
    cy.get('body').type('{%}');
    cy.get('body').type('{.}');
    cy.get('body').type('{6}');
    cy.get('body').type('{enter}');
    cy.get('[data-test-id=displayCC]').should('be.visible').should('have.value', '0.3');
    cy.get('[data-test-id=historyCC]').should('be.visible').contains('0.3%0.6');
  });
});
