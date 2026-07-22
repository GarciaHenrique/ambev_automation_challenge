import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import UserApiActions from "../../../actions/api/UserApiActions";

let user;

Given("a valid user", () => {
    user = UserApiActions.getUser();
});

Given("a duplicated user exists", () => {
    return UserApiActions.createDuplicatedUser().then(createdUser => {
        user = createdUser;
    });
});

When("I send a create user request", function () {
    return UserApiActions.createUser(user).then((response) => {
        this.apiResponse = response;
    });
});