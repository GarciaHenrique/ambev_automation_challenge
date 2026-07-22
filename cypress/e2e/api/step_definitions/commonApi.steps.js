import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("the response status should be {int}", function (statusCode) {
    expect(this.apiResponse.status).to.eq(statusCode);
});

Then("the response should contain the message {string}", function (message) {
    expect(this.apiResponse.body.message).to.eq(message);
});