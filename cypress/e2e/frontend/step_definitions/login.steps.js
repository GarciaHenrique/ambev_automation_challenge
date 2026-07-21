import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginActions from "../../../actions/LoginActions";
import HomePage from "../../../pages/HomePage";
import UserFactory from "../../../factories/UserFactory";

Given("I access the login page", () => {
  LoginActions.accessPage();
});

When("I log in with valid credentials", () => {
  const user = UserFactory.getAdmin();
  LoginActions.performLogin(user);
});

Then("I should be redirected to the home page", () => {
  HomePage.validateHomePage();
});