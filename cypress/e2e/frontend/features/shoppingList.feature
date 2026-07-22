Feature: Shopping List

    As an authenticated user
    I want to add products to my shopping list
    So that I can purchase them later

    Background:
        Given I am logged in

    @positive
    Scenario: Add product to shopping list
        When I add the first product to the shopping list
        And I open the shopping list
        Then the product should be displayed in the shopping list