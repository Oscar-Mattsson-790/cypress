describe("Events spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should display events", () => {
    cy.wait(2000);
    cy.get('[data-id="event"]').should("have.length.greaterThan", 4);
  });
});
