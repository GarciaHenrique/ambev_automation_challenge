import BasePage from "./common/BasePage";

class LoginPage extends BasePage {
  elements = {
    emailInput: () => cy.get('[data-testid="email"]'),
    passwordInput: () => cy.get('[data-testid="senha"]'),
    loginButton: () => cy.get('[data-testid="entrar"]'),
    alertMessage: () => cy.get(".alert"),
  };

  accessPage() {
    cy.visit("/login");
  }

  fillEmail(email) {
    this.type(this.elements.emailInput(), email);
  }

  fillPassword(password) {
    this.type(this.elements.passwordInput(), password);
  }

  clickLogin() {
    this.click(this.elements.loginButton());
  }

  validateErrorMessage(text) {
    this.shouldContain(this.elements.alertMessage(), text);
  }
}

export default new LoginPage();