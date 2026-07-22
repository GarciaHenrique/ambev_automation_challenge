Feature: Products API

    As a client application
    I want to retrieve products
    So that I can validate the products endpoint

    @positive
    Scenario: Get products successfully
        When I send a request to retrieve the product list
        Then the response status should be 200
        And the response should contain a valid product list