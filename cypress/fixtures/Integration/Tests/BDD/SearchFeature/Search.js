import {When, Then ,Given, } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in on the page", () => {
    cy.loginToPage("BogdanTest@yahoo.com","Test123")
    cy.get("#cookie-notification__accept").click()
   });

When("I enter {string} in the search bar", (keyword) => {
    cy.get('.sn-suggest-input').type(keyword)
});
When("I click the search button",() => {
cy.get('input[type="submit"]').click()
});
Then("I should see search results for {string}",(keyword)=>{
    const keywordLowerCase = keyword.toLowerCase(); // Convertim cuvântul cheie în litere mici

    cy.get(".npi_name").each(($element) => {
      const elementText = $element.text().toLowerCase(); // Convertim textul din element în litere mici
  
      expect(elementText).to.contain(keywordLowerCase); // Verificăm dacă textul elementului conține cuvântul cheie în litere mici
    });
  });