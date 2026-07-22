import { Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pages/HomePage";

Then("I should be redirected to the home page", () => {
    HomePage.validateHomePage();
});