import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginFactory from "../../../factories/LoginFactory";
import LoginApiActions from "../../../actions/api/LoginApiActions";

let user;

Given("a valid user exists", () => {
    return LoginApiActions.validUser().then((createdUser) => {
        user = createdUser;
    });
});

When("I send a login request with valid credentials", function () {
    return LoginApiActions.login(user).then((response) => {
        this.apiResponse = response;
    });
});

When("I send a login request with invalid credentials", function () {
    return LoginApiActions.login(
        LoginFactory.invalidUser()
    ).then((response) => {
        this.apiResponse = response;
    });
});

Then("the response should contain an authorization token", function () {
    expect(this.apiResponse.body).to.have.property("authorization");
    expect(this.apiResponse.body.authorization).to.not.be.empty;
});