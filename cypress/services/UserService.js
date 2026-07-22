import Urls from "../utils/Urls";

class UserService {

    create(user) {
        return cy.request({
            method: "POST",
            url: `${Urls.API.BASE}${Urls.API.USERS}`,
            failOnStatusCode: false,
            body: {
                nome: user.name,
                email: user.email,
                password: user.password,
                administrador: String(user.administrator)
            }
        });
    }

}

export default new UserService();