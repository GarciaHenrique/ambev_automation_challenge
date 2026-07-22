import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginActions from "../../../actions/frontend/LoginActions";
import LoginFactory from "../../../factories/LoginFactory";
import UserService from "../../../services/UserService";

Given("I am logged in", () => {
    const user = LoginFactory.getUser();
    return UserService.create(user).then(() => {
        LoginActions.navigate();
        LoginActions.login(user);
    });
});