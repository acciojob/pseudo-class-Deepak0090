//your JS code here. If required.
() => {
  const content = "Before Element";
  cy.window().then(window => {
    cy.get('a.before').then(element => {
      const before = window.getComputedStyle(element[0], "::before");
      const color = before.getPropertyValue("color");
      expect(color).to.equal('rgb(255, 0, 0)');
      const beforeContent = before.getPropertyValue("content");
      expect(beforeContent).to.equal(`"${content}"`);
    });
  });
}
