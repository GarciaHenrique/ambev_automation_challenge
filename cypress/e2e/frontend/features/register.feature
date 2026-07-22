Feature: User Registration

    As a visitor
    I want to create a new account
    So that I can access the system

    @positive
    Scenario: Successful Registration
        Given I access the register page
        When I register with the "VALID" user
        Then I should be redirected to the home page

    @negative
    Scenario Outline: Registration validation - <scenario>
        Given I access the register page
        When I register with the "<userType>" user
        Then I should see the "<validation>" registration validation

        Examples:
            | scenario           | userType         | validation         |
            | Name required      | EMPTY_NAME       | REQUIRED_NAME      |
            | Email required     | EMPTY_EMAIL      | REQUIRED_EMAIL     |
            | Password required  | EMPTY_PASSWORD   | REQUIRED_PASSWORD  |

    @negative @duplicated-email
    Scenario: Register with duplicated email
        Given I access the register page
        When I register with the "DUPLICATED_EMAIL" user
        Then I should see the "DUPLICATED_EMAIL" registration validation
