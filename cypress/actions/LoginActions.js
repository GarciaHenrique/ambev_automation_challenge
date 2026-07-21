import LoginPage from "../pages/LoginPage";

class LoginActions {
  accessPage() {
    LoginPage.accessPage();
  }

  performLogin(user) {
    LoginPage.fillEmail(user.email);
    LoginPage.fillPassword(user.password);
    LoginPage.clickLogin();
  }
}

export default new LoginActions();