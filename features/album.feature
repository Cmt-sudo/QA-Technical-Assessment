Feature: Search for an Album by Name
  As a user
  I want to log in and search for an album by name
  So that I can validate that the correct results appear

  Scenario: Login and search for album by name 
    Given I am on the login page
    When I enter "charlynmbugua@gmail.com" as email
    And I enter "admin@1234" as password
    And I click on the login button
    And I click on the Album tile
    And I enter "quidem molestiae enim" into the search box as album name
    Then I should see "quidem molestiae enim" in the album search results
