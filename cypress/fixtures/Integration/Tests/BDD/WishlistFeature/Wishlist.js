import {When, Then ,Given, } from "@badeball/cypress-cucumber-preprocessor";
import WishlistPage from "../Pages/WishlistPage";
let product_name_for_remove
let productTitle = []
Given("I am logged in on the page", () => {
  cy.loginToPage("BogdanTest@yahoo.com","Test123")
  WishlistPage.clickAcceptCookie()
});

When("I select a product from page", () => {
   WishlistPage.SelectProduct()

   // Grab the text 
   WishlistPage.GetProductName()
});

When("I click on the add Wishlist button",() => {
    WishlistPage.clickAddWishlistButton()
});

When("I click on save modify",() => {
  WishlistPage.clickSaveModifyButton()
});

Then("The item should be added to my Wishlist",() => {
  WishlistPage.assertItemAddedToWishlist()
});
When("I click on my wishlist",()=>{
  WishlistPage.clickOnMyWishlist()
})
When("I click on edit wishlist",()=>{
WishlistPage.clickOnEditWishlist()
})
When("I attempt to remove an item",()=>{
  WishlistPage.attemptToRemoveItemFromWishlist()
})
When("I click save button",()=>{
  WishlistPage.clickSaveButton()
})
Then("the item should be removed from the wishlist",()=>{
  WishlistPage.verifyItemRemovedFromWishlist(product_name_for_remove)
});
When("I click wishlist from my list",()=>{
 WishlistPage.clickWishlistFromList()
 productTitle = WishlistPage.getWishlistProductTitles()
})
When("Press adauga in cos button",()=>{
  WishlistPage.pressAddToCartButton()
})
Then("all the items should be visible in cart",()=>{
  WishlistPage.verifyItemsExistInCart(productTitle)
})
