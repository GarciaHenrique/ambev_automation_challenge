class BasePage {

    visit(path) {
        cy.visit(path);
    }

    click(element) {
        return element.click();
    }

    clear(element) {
        return element.clear();
    }

    type(element, value) {
        element.clear();
        if (value != null) {
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
        cy.url().should("include", url);
    }

    shouldHaveOneOfUrls(urls) {
        cy.url().should((currentUrl) => {
            expect(urls, `Expected URL '${currentUrl}' to be one of the allowed URLs`)
                .to.include(currentUrl);
        });
    }

}

export default BasePage;