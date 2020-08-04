// / <reference types="cypress" />

context("WireframeContainer", () => {
  beforeEach(() => {
    cy.visit("/#/simple/");
  });

  it("Should open and close the annotations", () => {
    cy.get("[data-annotations-container] .annotations h1")
      .should("have.text", "Annotations")
      .get("[data-test=\"container\"]")
      .should("have.class", "open");

    // cy.wait(1000);

    cy.screenshot("open");

    cy.get("[data-test=\"toggle\"]")
      .click({ force: true })
      .get("[data-test=\"container\"]")
      .should("not.have.class", "open")
      .wait(500)
      .get("[data-annotations-container] .annotations h1")
      .should("not.have.text", "Annotations");

    // cy.wait(1000)
    cy.screenshot("closed");

    cy.get("[data-test=\"toggle\"]")
      .click()
      .get("[data-test=\"container\"]")
      .should("have.class", "open")
      .wait(500)
      .get("[data-annotations-container] .annotations h1")
      .should("have.text", "Annotations");
  });
});
