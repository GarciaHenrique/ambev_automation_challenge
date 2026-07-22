class BasePage {

    visit(path) {
        cy.visit(path);
    }

    click(element, options = {}) {
        return element.click(options);
    }

    clear(element) {
        return element.clear();
    }

    type(element, value, options = {}) {
        element.clear();
        if (value != null) {
            element.type(value, options);
        }
        return element;
    }

    shouldBeVisible(element) {
        return element.should("be.visible");
    }

    shouldContain(element, text) {
        return element.should("contain.text", text);
    }

    shouldHaveText(element, text) {
        return element.should("have.text", text);
    }

    shouldExist(element) {
        return element.should("exist");
    }

    shouldNotExist(element) {
        return element.should("not.exist");
    }

    shouldBeEnabled(element) {
        return element.should("be.enabled");
    }

    shouldBeDisabled(element) {
        return element.should("be.disabled");
    }

    shouldHaveValue(element, value) {
        return element.should("have.value", value);
    }

    shouldHaveUrl(url) {
        cy.url().should("include", url);
    }

    shouldHaveOneOfUrls(urls) {
        cy.url().should((currentUrl) => {
            expect(
                urls,
                `Expected URL '${currentUrl}' to be one of the allowed URLs`
            ).to.include(currentUrl);
        });
    }

}

export default BasePage;