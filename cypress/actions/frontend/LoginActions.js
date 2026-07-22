import LoginPage from "../../pages/LoginPage";
import ValidationTypes from "../../constants/ValidationTypes";
import Messages from "../../constants/Messages";

class LoginActions {

    navigate() {
        LoginPage.navigate();
    }

    login(user) {
        LoginPage.fillEmail(user.email);
        LoginPage.fillPassword(user.password);
        LoginPage.clickLogin();
    }

    validateLogin(validationType) {
        const validations = {
            [ValidationTypes.AUTHENTICATION]: () =>
                LoginPage.validateAlert(Messages.LOGIN.INVALID_LOGIN),

            [ValidationTypes.REQUIRED_EMAIL]: () =>
                LoginPage.validateAlert(Messages.LOGIN.REQUIRED_EMAIL),

            [ValidationTypes.REQUIRED_PASSWORD]: () =>
                LoginPage.validateAlert(Messages.LOGIN.REQUIRED_PASSWORD),

            [ValidationTypes.REQUIRED_FIELDS]: () => {
                LoginPage.validateAlert(Messages.LOGIN.REQUIRED_EMAIL);
                LoginPage.validateAlert(Messages.LOGIN.REQUIRED_PASSWORD);
            }

        };

        const validation = validations[validationType];
            if (!validation) {
                throw new Error(`Validation '${validationType}' not implemented.`);
            }
            validation();
    }

}

export default new LoginActions();