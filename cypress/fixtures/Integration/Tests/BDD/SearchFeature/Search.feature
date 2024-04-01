Feature:Search Functionality

     Background: Logged in to account 
     Given I am logged in on the page 

 Scenario Outline: Search multiple products
    When I introduce "<ValidProduct>" in the search bar
    And I click the search button
    Then I should see search results for "<ValidProduct>"

    Examples:
      | ValidProduct    |
      | iPhone         |
      | MacBook        |
      | SmartWatch   |

  Scenario Outline: Search price range product
  When I enter "<product>" in the search bar
  And I click the search button
  And I click "<keyword>" price filter
  Then I should see the prices for items in "<keyword>" order

Examples:
  | product       | keyword           |
  | SmartWatch    | Pret crescator     |
  | Phone         | Pret descrescator  |