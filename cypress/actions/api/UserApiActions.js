import LoginFactory from "../../factories/LoginFactory";
import UserService from "../../services/UserService";

class UserApiActions {

    getUser() {
        return LoginFactory.getUser();
    }

    createDuplicatedUser() {
        const user = LoginFactory.getUser();
        return UserService.create(user).then(() => user);
    }

    createUser(user) {
        return UserService.create(user);
    }

}

export default new UserApiActions();