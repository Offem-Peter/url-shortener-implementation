describe("API TESTS", () => {
  
  Cypress.config("baseUrl","http://localhost:4000")
  
  it("Tests Encode endpoint", () => {
    const payload = {
      "originalUrl": "https://google.com",
    };

    cy.request("POST","/api/encode",payload)
    .its("body")
    .should("include",{"encodedUrl":"o8idxq"});
  });


  it("Tests decode endpoint", () => {
    const payload = {
      "shortUrl": "o8idxq",
    };

    cy.request("POST","/api/decode",payload)
    .its("body")
    .should("include",{"decodedUrl":"https://google.com"});
  });
});