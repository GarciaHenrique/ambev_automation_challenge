import {Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterActions from "../../../actions/RegisterActions";
import RegisterFactory from "../../../factories/RegisterFactory";
import UserService from "../../../services/UserService";
import users from "../../../fixtures/users.json";

Before({tags: "@duplicated-email"}, () =>{
    UserService.create(users["duplicatedUser"])
});

Given("I access the register page", () => {
    RegisterActions.navigate();
});

When("I register with the {string} user", (userType) => {

    const user = RegisterFactory.getUser(userType);

    cy.log(`TYPE: ${userType}`);
    cy.log(`USER: ${JSON.stringify(user)}`);

    RegisterActions.register(user);

});

Then("I should see the {string} registration validation", (validation) => {
    RegisterActions.validate(validation);
});