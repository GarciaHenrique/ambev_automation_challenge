Feature: Login

    As a user of the application
    I want to log in
    So that I can access the system

    @positive
    Scenario: Successful login
        Given I access the login page
        When I log in with the "ADMIN" user
        Then I should be redirected to the home page

    @negative
    Scenario Outline: Invalid login attempts
        Given I access the login page
        When I log in with the "<userType>" user
        Then I should see the "<validation>" validation
        
        Examples:
            | userType          | validation          |
            | INVALID_EMAIL     | AUTHENTICATION      |
            | INVALID_PASSWORD  | AUTHENTICATION      |
            | EMPTY_EMAIL       | REQUIRED_EMAIL      |
            | EMPTY_PASSWORD    | REQUIRED_PASSWORD   |
            | EMPTY_FIELDS      | REQUIRED_FIELDS     |