Feature: Login

  As a user of the application
  I want to log in
  So that I can access the system

  Scenario: Successful login
    Given I access the login page
    When I log in with valid credentials
    Then I should be redirected to the home page