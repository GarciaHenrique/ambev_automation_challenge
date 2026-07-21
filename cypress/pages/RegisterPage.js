import BasePage from "./common/BasePage";

class RegisterPage extends BasePage {
  elements = {
    form: () => cy.get("body"),
  };
}

export default new RegisterPage();
