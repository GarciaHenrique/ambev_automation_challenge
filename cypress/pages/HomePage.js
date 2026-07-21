import BasePage from "./common/BasePage";

class HomePage extends BasePage {
  elements = {
    pageTitle: () => cy.get("body"),
  };

  validateHomePage() {
    this.shouldBeVisible(this.elements.pageTitle());
    this.shouldHaveUrl("/");
  }
}

export default new HomePage();