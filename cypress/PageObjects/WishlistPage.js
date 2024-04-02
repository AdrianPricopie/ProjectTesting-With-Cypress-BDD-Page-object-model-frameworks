import WishlistLocators from "../fixtures/Integration/Tests/Locators/WishlistLocators"
const Locators = WishlistLocators
class WishlistPage
{  
    SelectProduct(){
        cy.get(Locators.swiperSlideSelector).eq(0).click()
    }
    GetProductName(){
        cy.get(Locators.productNameSelector).then(function(element){
            let product_name = element.text()
            cy.log(product_name) // for verify 
          })
    }
    clickAddWishlistButton() {
        cy.get(Locators.addToWishlistButtonASelector).click();
      }
    
    clickSaveModifyButton() {
        cy.get(Locators.saveModifyButtonSelector).click();
      }
    assertItemAddedToWishlist(productName) {
        cy.get(Locators.wishlistProductTableRowSelector).each(($element) => {
          if ($element.text().includes(productName)) {
            cy.wrap($element).should('contain.text', productName);
          }
        });
    }
    clickOnMyWishlist() {
        cy.get(Locators.wishlistHeaderSelector).click();
      }
    
    clickOnEditWishlist() {
        cy.get(Locators.editWishlistButtonSelector).click();
      }
    
    attemptToRemoveItemFromWishlist(){
      cy.get(Locators.wishlistTableRowSelector).each((index) => {
        if (index === 1){
         cy.get(Locators.wishlistProductSelector).eq(index).then(function(element){
           let product_name_for_remove = element.text()
           cy.log(product_name_for_remove)
         })
         cy.get(Locators.wishlistArticleInputSelector).eq(index).check()
        }
      });
     }
    
     clickSaveButton() {
        cy.get(Locators.saveButtonSelector).click();
      }
    verifyItemRemovedFromWishlist(productName) {
        cy.get(Locators.wishlistLinkSelector).click();
        cy.contains(Locators.wishlistProductTableRowSelector, productName).should('not.exist');
      }
    clickWishlistFromList() {
        cy.get(Locators.wishlistLinkSelector).click();
    }
    getWishlistProductTitles() {
        const productTitles = [];
        cy.get(Locators.wishlistProductSelector).each(($element) => {
          const title = $element.text(); 
          productTitles.push(title);
        });
        return productTitles;
    }
    pressAddToCartButton() {
        cy.get(Locators.addToCartButtonSelector).click();
    }
    verifyItemsExistInCart(productTitles) {
        productTitles.forEach(title => {
          cy.get(Locators.cartproductname).each($element => {
            if ($element.text() === title) {
              cy.wrap($element).should('exist');
            }
          });
        });
    }
    clickAcceptCookie(){
      cy.get(Locators.cookieAcceptButtonSelector).click();

    }

}
export default new WishlistPage();