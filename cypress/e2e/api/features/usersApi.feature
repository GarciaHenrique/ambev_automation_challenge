Feature: Users API

    As a client application
    I want to create users
    So that I can validate the user registration endpoint

    @positive
    Scenario: Create user successfully
        Given a valid user
        When I send a create user request
        Then the response status should be 201
        And the response should contain the message "Cadastro realizado com sucesso"

    @negative
    Scenario: Create duplicated user
        Given a duplicated user exists
        When I send a create user request
        Then the response status should be 400
        And the response should contain the message "Este email já está sendo usado"