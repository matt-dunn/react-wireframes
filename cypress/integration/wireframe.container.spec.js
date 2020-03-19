// / <reference types="cypress" />

context("WireframeContainer", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080/");
  });

  it("Should open and close the annotations", () => {
    cy.get("[data-annotations-container] .annotations h1")
      .should("have.text", "Annotations")
      .get("[data-wf-container]")
      .should("have.class", "open");

    // cy.wait(1000);

    cy.screenshot("open");

    cy.get("[data-wf-toggle]")
      .click()
      .get("[data-wf-container]")
      .should("not.have.class", "open")
      .wait(500)
      .get("[data-annotations-container] .annotations h1")
      .should("not.have.text", "Annotations");

    // cy.wait(1000)
    cy.screenshot("closed");

    cy.get("[data-wf-toggle]")
      .click()
      .get("[data-wf-container]")
      .should("have.class", "open")
      .wait(500)
      .get("[data-annotations-container] .annotations h1")
      .should("have.text", "Annotations");
  });
});
