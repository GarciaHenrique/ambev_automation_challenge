class BasePage {

    visit(path) {
        cy.visit(path);
    }

    click(element) {
        element.click();
    }

    type(element, value) {
        element.clear().type(value);
    }

    shouldBeVisible(element) {
        element.should('be.visible');
    }

    shouldContain(element, text) {
        element.should('contain.text', text);
    }

    shouldHaveUrl(url) {
        cy.url().should('include', url);
    }

}

export default BasePage;