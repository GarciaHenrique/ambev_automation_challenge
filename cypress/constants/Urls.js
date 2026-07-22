const Urls = Object.freeze({

    FRONT: Object.freeze({
        BASE: Cypress.config("baseUrl"),
        HOME: "/home",
        ADMIN_HOME: "/admin/home",
        LOGIN: "/login",
        REGISTER: "/cadastrarusuarios"
    }),

    API: Object.freeze({
        BASE: Cypress.env("apiUrl"),
        LOGIN: "/login",
        USERS: "/usuarios",
        PRODUCTS: "/produtos"
    })

});

export default Urls;