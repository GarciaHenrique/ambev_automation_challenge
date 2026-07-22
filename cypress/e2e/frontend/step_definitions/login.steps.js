import {Before, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import LoginActions from "../../../actions/LoginActions";
import UserFactory from "../../../factories/UserFactory";
import UserService from "../../../services/UserService";
import LoginFactory from "../../../factories/LoginFactory";

Before({ tags: "@positive" }, () => {
    const user = LoginFactory.createValidUser();

    cy.wrap(user).as("loginUser");

    UserService.create(user).then((response) => {
        cy.log(`STATUS: ${response.status}`);
        cy.log(JSON.stringify(response.body));
    });
});

Given("I access the login page", () => {
    LoginActions.navigate();
});

When("I log in with the {string} user", (userType) => {
    if (userType === "VALID") {
        cy.get("@loginUser").then((user) => {
            LoginActions.login(user);
        });
        return;
    }
    LoginActions.login(
        UserFactory.getUser(userType)
    );
});

Then("I should see the {string} validation",(validation) => {
    LoginActions.validateLogin(validation);
});