import LoginPage from "../pages/LoginPage";
import ValidationTypes from "../utils/ValidationTypes";
import Messages from "../utils/Messages";

class LoginActions {

    accessPage() {
        LoginPage.accessPage();
    }

    performLogin(user) {

        cy.log(`EMAIL => ${user.email}`);
        cy.log(`PASSWORD => ${user.password}`);

        LoginPage.fillEmail(user.email);
        LoginPage.fillPassword(user.password);

        LoginPage.elements.form.emailInput().invoke("val").then(value => {
            cy.log(`EMAIL INPUT => '${value}'`);
        });

        LoginPage.elements.form.passwordInput().invoke("val").then(value => {
            cy.log(`PASSWORD INPUT => '${value}'`);
        });

        LoginPage.clickLogin();
    }

    validate(validationType) {
        const validations = {
            [ValidationTypes.AUTHENTICATION]: () =>
                LoginPage.validateAlert(Messages.INVALID_LOGIN),

            [ValidationTypes.REQUIRED_EMAIL]: () =>
                LoginPage.validateAlert(Messages.REQUIRED_EMAIL),

            [ValidationTypes.REQUIRED_PASSWORD]: () =>
                LoginPage.validateAlert(Messages.REQUIRED_PASSWORD),

            [ValidationTypes.REQUIRED_FIELDS]: () => {
                LoginPage.validateAlert(Messages.REQUIRED_EMAIL);
                LoginPage.validateAlert(Messages.REQUIRED_PASSWORD);
            }

        };

        const validation = validations[validationType];
            if (!validation) {
                throw new Error(
                    `Validation '${validationType}' not implemented.`
                );
            }
            validation();
    }

}

export default new LoginActions();