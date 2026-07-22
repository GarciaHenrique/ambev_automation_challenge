import BasePage from "./common/BasePage";

class ProductsPage extends BasePage {

    elements = {
        products: {
            firstProductName: () => cy.get(".card-title").first(),
            firstAddButton: () => cy.get('[data-testid="adicionarNaLista"]').first()
        },

        shoppingList: {
            menu: () => cy.contains("a", "Lista de Compras"),
            productName: () => cy.get('[data-testid="shopping-cart-product-name"]').first()
        }
    };

    getFirstProductName() {
        return this.elements.products.firstProductName()
            .invoke("text")
            .then(text => text.trim());
    }

    addFirstProduct() {
        this.click(this.elements.products.firstAddButton());
    }

    openShoppingList() {
        this.click(this.elements.shoppingList.menu());
    }

    validateProductAdded(productName) {
        this.elements.shoppingList.productName()
            .invoke("text")
            .then(text => {
                const shoppingListProduct = text
                    .replace("Produto:", "")
                    .trim();

                expect(shoppingListProduct).to.eq(productName);
            });
    }

}

export default new ProductsPage();