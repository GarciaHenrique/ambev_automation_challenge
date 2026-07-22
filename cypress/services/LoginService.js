import BaseService from "./common/BaseService";
import Urls from "../constants/Urls";

class LoginService extends BaseService {

    login(credentials) {
        return this.post(
            Urls.API.LOGIN,
            {
                email: credentials.email,
                password: credentials.password
            }
        );
    }

}

export default new LoginService();