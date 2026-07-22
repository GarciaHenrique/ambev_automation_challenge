import BasePage from "./common/BasePage";
import Urls from "../constants/Urls";

class HomePage extends BasePage {
  elements = {
    pageTitle: () => cy.contains("Home"),
  };

  validateHomePage() {
      this.shouldHaveOneOfUrls([
          `${Urls.FRONT.BASE_URL}${Urls.FRONT.HOME}`,
          `${Urls.FRONT.BASE_URL}${Urls.FRONT.ADMIN_HOME}`
      ]);
      this.shouldBeVisible(
          this.elements.pageTitle()
      );
  }
}

export default new HomePage();