Feature:Search Functionality

     Background: Logged in to account 
     Given I am logged in on the page 

 Scenario Outline: Search multiple products
    When I enter "<keyword>" in the search bar
    And I click the search button
    Then I should see search results for "<keyword>"

    Examples:
      | keyword        |
      | iPhone         |
      | MacBook        |
      | SmartWatch   |

