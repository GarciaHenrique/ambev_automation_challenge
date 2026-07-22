import BasePage from "./common/BasePage";

class RegisterPage extends BasePage {
    elements = {
        form: {
            nameInput: () => cy.get('[data-testid="nome"]'),
            emailInput: () => cy.get('[data-testid="email"]'),
            passwordInput: () => cy.get('[data-testid="password"]'),
            administratorCheckbox: () => cy.get('[data-testid="checkbox"]'),
            registerButton: () => cy.get('[data-testid="cadastrar"]')
        },
        feedback: {
            alert: () => cy.get('[role="alert"]:visible')
        }
    };

    navigate() {
        this.visit("/cadastrarusuarios");
    }

    fillName(name) {
        if (name === undefined) {
            this.clear(this.elements.form.nameInput());
            return;
        }
        this.type(this.elements.form.nameInput(), name);
    }

    fillEmail(email) {
        if (email === undefined) {
            this.clear(this.elements.form.emailInput());
            return;
        }
        this.type(this.elements.form.emailInput(), email);
    }

    fillPassword(password) {
        if (password === undefined) {
            this.clear(this.elements.form.passwordInput());
            return;
        }
        this.type(this.elements.form.passwordInput(), password);
    }

    checkAdministrator(administrator) {
        if (administrator) {
            this.click(this.elements.form.administratorCheckbox());
        }
    }

    submit() {
        this.click(this.elements.form.registerButton());
    }

    validateAlert(message) {
        this.shouldContain(this.elements.feedback.alert(), message);
    }
}

export default new RegisterPage();