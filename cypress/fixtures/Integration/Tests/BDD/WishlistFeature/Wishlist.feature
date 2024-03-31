Feature: Wishlist feature

  Background: Logged in to account 
  Given I am logged in on the page 

 @smoke_wishlist_add-item
  Scenario: Add Item to Wishlist
    When  I select a product from page 
    And I click on the add Wishlist button
    And I click on save modify 
    Then The item should be added to my Wishlist
 
 @regression_wishlist_remove-item
  Scenario: Remove item from the wishlist
    When I click on my wishlist
    And I click on edit wishlist
    And I attempt to remove an item
    And I click save button
    Then the item should be removed from the wishlist
  
  @regression_wishlist_add-to-cart
  Scenario:Add all the item from wishlist to my cart
    When I click on my wishlist
    And I click wishlist from my list
    And Press adauga in cos button
    Then all the items should be visible in cart
 