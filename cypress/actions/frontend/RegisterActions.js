import RegisterPage from "../../pages/RegisterPage";
import Messages from "../../constants/Messages";
import ValidationTypes from "../../constants/ValidationTypes";

class RegisterActions {

    navigate() {
        RegisterPage.navigate();
    }

    register(user) {
    RegisterPage.fillName(user.name);
    RegisterPage.fillEmail(user.email);
    RegisterPage.fillPassword(user.password);
    RegisterPage.checkAdministrator(user.administrator);
    RegisterPage.elements.form.nameInput()
    RegisterPage.submit();
}

    validate(validationType) {
        const validations = {
            SUCCESS: () =>
                RegisterPage.validateAlert(Messages.REGISTER.SUCCESS),

            [ValidationTypes.REQUIRED_NAME]: () =>
                RegisterPage.validateAlert(Messages.REGISTER.REQUIRED_NAME),

            [ValidationTypes.REQUIRED_EMAIL]: () =>
                RegisterPage.validateAlert(Messages.REGISTER.REQUIRED_EMAIL),

            [ValidationTypes.REQUIRED_PASSWORD]: () =>
                RegisterPage.validateAlert(Messages.REGISTER.REQUIRED_PASSWORD),

            DUPLICATED_EMAIL: () =>
                RegisterPage.validateAlert(Messages.REGISTER.DUPLICATED_EMAIL)
        };

        const validation = validations[validationType];

        if (!validation) {
            throw new Error(`Validation '${validationType}' not implemented.`);
        }
        validation();
    }

}

export default new RegisterActions();