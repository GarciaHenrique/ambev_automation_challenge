import users from "../fixtures/users.json";
import UserTypes from "../utils/UserTypes";

class UserFactory {

    static getUser(type) {
        const admin = users.admin;
        const usersMap = {
            [UserTypes.ADMIN]: {
                ...admin
            },

            [UserTypes.INVALID_EMAIL]: {
                ...admin,
                email: "invalid@example.com"
            },

            [UserTypes.INVALID_PASSWORD]: {
                ...admin,
                password: "wrongPassword"
            },

            [UserTypes.EMPTY_EMAIL]: {
                ...admin,
                email: undefined
            },

            [UserTypes.EMPTY_PASSWORD]: {
                ...admin,
                password: undefined
            },

            [UserTypes.EMPTY_FIELDS]: {
                email: undefined,
                password: undefined
            }
        };

        return usersMap[type];

    }
    
}

export default UserFactory;