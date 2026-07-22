import Urls from "../../constants/Urls";

class BaseService {

    get(endpoint) {
        return cy.request({
            method: "GET",
            url: `${Urls.API.BASE_URL}${endpoint}`,
            failOnStatusCode: false
        });
    }

    post(endpoint, body) {
        return cy.request({
            method: "POST",
            url: `${Urls.API.BASE_URL}${endpoint}`,
            failOnStatusCode: false,
            body
        });
    }

    put(endpoint, body) {
        return cy.request({
            method: "PUT",
            url: `${Urls.API.BASE_URL}${endpoint}`,
            failOnStatusCode: false,
            body
        });
    }

    delete(endpoint) {
        return cy.request({
            method: "DELETE",
            url: `${Urls.API.BASE_URL}${endpoint}`,
            failOnStatusCode: false
        });
    }

}

export default BaseService;