import { faker } from "@faker-js/faker";

class LoginFactory {

    static validUser() {
        return {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: "123456",
            administrator: false
        };
    }

    static invalidUser() {
        return {
            email: faker.internet.email(),
            password: "wrongPassword"
        };
    }

}

export default LoginFactory;