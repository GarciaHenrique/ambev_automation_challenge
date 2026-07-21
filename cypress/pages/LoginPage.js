import BasePage from "./common/BasePage";

console.log("LoginPage carregada");

class LoginPage extends BasePage {
    elements = {
        form: {
            emailInput: () => cy.get('[data-testid="email"]'),
            passwordInput: () => cy.get('[data-testid="senha"]'),
            loginButton: () => cy.get('[data-testid="entrar"]')
        },
        feedback: {
            alert: () => cy.get('[role="alert"]:visible')
        }
    };

    accessPage() {
        this.visit("/login");
    }

    fillEmail(email) {
        if (email === undefined) {
            this.clear(this.elements.form.emailInput());
            return;
        }
        this.type(
            this.elements.form.emailInput(),
            email
        );
    }

    fillPassword(password) {
        if (password === undefined) {
            this.clear(this.elements.form.passwordInput());
            return;
        }
        this.type(
            this.elements.form.passwordInput(),
            password
        );
    }

    clickLogin() {
        this.click(this.elements.form.loginButton());
    }

    validateAlert(message) {

        this.elements.feedback.alert()
            .invoke("text")
            .then(text => {
                console.log("ALERTA:", JSON.stringify(text));
            });

        this.elements.feedback.alert()
            .should("contain.text", message);

    }

}

export default new LoginPage();