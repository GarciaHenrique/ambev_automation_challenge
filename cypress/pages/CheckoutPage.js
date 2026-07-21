import BasePage from "./common/BasePage";

class CheckoutPage extends BasePage {
  elements = {
    summary: () => cy.get("body"),
  };
}

export default new CheckoutPage();
