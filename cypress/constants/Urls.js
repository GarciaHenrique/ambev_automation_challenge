const Urls = Object.freeze({

    FRONT: {
        BASE_URL: Cypress.config("baseUrl"),
        HOME: "/home",
        ADMIN_HOME: "/admin/home",
        LOGIN: "/login",
        REGISTER: "/cadastrarusuarios"
    },

    API: {
        BASE_URL: Cypress.env("apiUrl"),
        LOGIN: "/login",
        USERS: "/usuarios",
        PRODUCTS: "/produtos"
    }

});

export default Urls;