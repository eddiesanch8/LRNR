// Test 1: LRNR homepage
describe("Homepage loads", () => {
  it("should load the LRNR homepage", () => {
    cy.visit("http://localhost:5173");
    cy.contains("LRNR").should("exist");
  });
});

// Test 2: LRNR quiz
describe("Quiz loads", () => {
  it("should load the LRNR quiz", () => {
    cy.visit("http://localhost:5173/quiz");
    cy.contains("quiz").should("exist");
  });
});

// Test 3: LRNR account
describe("Account loads", () => {
  it("should load the LRNR account", () => {
    cy.visit("http://localhost:5173/account");
    cy.contains("Discover Your Learning Potential").should("exist");
  });
});
