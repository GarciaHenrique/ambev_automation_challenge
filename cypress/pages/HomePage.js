import BasePage from "./common/BasePage";
import Urls from "../constants/Urls";

class HomePage extends BasePage {
  elements = {
    pageTitle: () => cy.get("body"),
  };

  validateHomePage() {
      this.shouldHaveOneOfUrls([
          `${Urls.FRONT.BASE}${Urls.FRONT.HOME}`,
          `${Urls.FRONT.BASE}${Urls.FRONT.ADMIN_HOME}`
      ]);
      this.shouldBeVisible(
          this.elements.pageTitle()
      );
  }
}

export default new HomePage();