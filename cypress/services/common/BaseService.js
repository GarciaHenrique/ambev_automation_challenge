import Urls from "../../constants/Urls";

class BaseService {

    post(endpoint, body) {
        return cy.request({
            method: "POST",
            url: `${Urls.API.BASE}${endpoint}`,
            failOnStatusCode: false,
            body
        });

    }

    get(endpoint) {
        return cy.request({
            method: "GET",
            url: `${Urls.API.BASE}${endpoint}`,
            failOnStatusCode: false
        });
    }

}

export default BaseService;