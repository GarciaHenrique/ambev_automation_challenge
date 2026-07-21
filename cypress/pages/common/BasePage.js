class BasePage {

    visit(path) {
        cy.visit(path);
    }

    click(element) {
        return element.click();
    }

    type(element, value) {
        element.clear();
        if (value !== undefined && value !== null) {
            element.type(value);
        }
        return element;
    }

    shouldBeVisible(element) {
        return element.should("be.visible");
    }

    shouldContain(element, text) {
        return element.should("contain.text", text);
    }

    shouldHaveUrl(url) {
        cy.url().should('include', url);
    }

    clear(element) {
        return element.clear();
    }

}

export default BasePage;