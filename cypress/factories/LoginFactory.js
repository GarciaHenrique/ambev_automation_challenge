import { faker } from "@faker-js/faker";

class LoginFactory {

    static createValidUser() {
        return {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: "123456",
            administrator: false
        };
    }

}

export default LoginFactory;