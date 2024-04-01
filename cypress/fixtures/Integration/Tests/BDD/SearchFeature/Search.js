import {When, Then ,Given, } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in on the page", () => {
    cy.loginToPage("BogdanTest@yahoo.com","Test123")
    cy.get("#cookie-notification__accept").click()
    
   });

When("I introduce {string} in the search bar", (ValidProduct) => {
    cy.get('.sn-suggest-input').type(ValidProduct)
});
When("I click the search button",() => {
cy.get('input[type="submit"]').click()
});
Then("I should see search results for {string}",(ValidProduct)=>{
    const keywordLowerCase = ValidProduct.toLowerCase(); // Convertim cuvântul cheie în litere mici

    cy.get(".npi_name").each(($element) => {
      const elementText = $element.text().toLowerCase(); // Convertim textul din element în litere mici
  
      expect(elementText).to.contain(keywordLowerCase); // Verificăm dacă textul elementului conține cuvântul cheie în litere mici
    });
  });
Then("I should see the prices for itmes  in ascending order",()=>{
  cy.wait(2000)
  const prices = []
  cy.get('.real_price').each(($element) => {
   const TitlePrice =  $element.text()
   const FormatText = parseFloat(TitlePrice.trim().slice(0,-4).replace(",","."))
    prices.push(FormatText)

}).then(()=>{
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).to.be.at.most(prices[i + 1]);
  }
  console.log(prices)
  });
});

When("I enter {string} in the search bar",(product)=>{
  cy.get('.sn-suggest-input').type(product)
})

When("I click {string} price filter",(keyword)=>{
  cy.get('#sortWidget').select(keyword)
})

Then("I should see the prices for items in {string} order",(keyword)=>
{
  cy.wait(2000)
  const prices = []
  cy.get('.real_price').each(($element) => {
   const TitlePrice =  $element.text()
   const FormatText = parseFloat(TitlePrice.trim().slice(0,-4).replace(",","."))
    prices.push(FormatText)

}).then(()=>{
  if(keyword === 'Pret crescator'){
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).to.be.at.most(prices[i + 1]);
  }
  }
  if(keyword === 'Pret descrescator'){
    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).to.be.at.least(prices[i + 1]);
    }
  }
  });
});
