describe("Home Page", () => {
  it("should display the intro text", () => {
    cy.visit("/");
    cy.contains("Mike");
  });

  it("should not display incorrect text", () => {
    cy.visit("/");
    cy.contains("wrong text").should("not.exist");
  });
});
