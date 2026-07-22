import ProductsPage from "../../pages/ProductsPage";

class ProductsActions {

    getFirstProductName() {
        return ProductsPage.getFirstProductName();
    }

    addFirstProductToShoppingList() {
        ProductsPage.addFirstProduct();
    }

    openShoppingList() {
        ProductsPage.openShoppingList();
    }

    validateProductAdded(productName) {
        ProductsPage.validateProductAdded(productName);
    }

}

export default new ProductsActions();