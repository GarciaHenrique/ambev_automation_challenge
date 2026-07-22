import { faker } from "@faker-js/faker";
import RegisterTypes from "../utils/RegisterTypes";
import users from "../fixtures/users.json";

class RegisterFactory {

    static getUser(type) {
        const validUser = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: "123456",
            administrator: false
        };

        const usersMap = {
            [RegisterTypes.VALID]: {
                ...validUser
            },

            [RegisterTypes.EMPTY_NAME]: {
                ...validUser,
                name: undefined
            },

            [RegisterTypes.EMPTY_EMAIL]: {
                ...validUser,
                email: undefined
            },

            [RegisterTypes.EMPTY_PASSWORD]: {
                ...validUser,
                password: undefined
            },

            [RegisterTypes.DUPLICATED_EMAIL]: {
                ...users["duplicatedUser"]
            }
        };
        return usersMap[type];
    }

}

export default RegisterFactory;