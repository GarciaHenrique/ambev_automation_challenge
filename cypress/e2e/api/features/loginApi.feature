Feature: Login API

    As a client application
    I want to authenticate a user
    So that I can access protected resources

    @positive
    Scenario: Successful login
        Given a valid user exists
        When I send a login request with valid credentials
        Then the response status should be 200
        And the response should contain an authorization token

    @negative
    Scenario: Invalid login
        When I send a login request with invalid credentials
        Then the response status should be 401
        And the response should contain the message "Email e/ou senha inválidos"