import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginActions from "../../../actions/frontend/LoginActions";
import LoginFactory from "../../../factories/LoginFactory";
import UserService from "../../../services/UserService";

let authenticatedUser;

Given("I am logged in", () => {
    const user = LoginFactory.validUser();
    return UserService.create(user).then(() => {
        LoginActions.navigate();
        LoginActions.login(user);
    });
});