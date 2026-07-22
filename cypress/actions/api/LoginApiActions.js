import LoginFactory from "../../factories/LoginFactory";
import LoginService from "../../services/LoginService";
import UserService from "../../services/UserService";

class LoginApiActions {

    getUser() {
        const user = LoginFactory.getUser();
        return UserService.create(user).then(() => user);
    }

    login(credentials) {
        return LoginService.login(credentials);
    }

    loginWithInvalidCredentials() {
        const invalidUser = LoginFactory.invalidUser();
        return LoginService.login(invalidUser);
    }

}

export default new LoginApiActions();