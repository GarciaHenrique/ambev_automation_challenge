import users from "../fixtures/login.json";

class UserFactory {
  getAdmin() {
    return users.admin;
  }

  getUser() {
    return users.user;
  }
}

export default new UserFactory();