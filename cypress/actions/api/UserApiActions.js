import LoginFactory from "../../factories/LoginFactory";
import UserService from "../../services/UserService";

class UserApiActions {

    validUser() {
        return LoginFactory.validUser();
    }

    createDuplicatedUser() {
        const user = LoginFactory.validUser();
        return UserService.create(user).then(() => user);
    }

    createUser(user) {
        return UserService.create(user);
    }

}

export default new UserApiActions();