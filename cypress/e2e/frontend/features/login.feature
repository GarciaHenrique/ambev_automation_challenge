Feature: Login

    As a user of the application
    I want to log in
    So that I can access the system

    @positive
    Scenario: Successful login
        Given I access the login page
        When I log in with the "VALID" user
        Then I should be redirected to the home page

    @negative
    Scenario Outline: Login validatiion - <scenario>
        Given I access the login page
        When I log in with the "<userType>" user
        Then I should see the "<validation>" validation
        
        Examples:
            | scenario                  | userType         | validation        |
            | Invalid email             | INVALID_EMAIL    | AUTHENTICATION    |
            | Invalid password          | INVALID_PASSWORD | AUTHENTICATION    |
            | Empty email               | EMPTY_EMAIL      | REQUIRED_EMAIL    |
            | Empty password            | EMPTY_PASSWORD   | REQUIRED_PASSWORD |
            | Empty email and password  | EMPTY_FIELDS     | REQUIRED_FIELDS   |