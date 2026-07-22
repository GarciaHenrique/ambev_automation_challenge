import { When, Then} from "@badeball/cypress-cucumber-preprocessor";
import ProductsActions from "../../../actions/frontend/ProductsActions";

When("I add the first product to the shopping list", function () {
    return ProductsActions.getFirstProductName()
        .then((productName) => {
            this.productName = productName;
            ProductsActions.addFirstProductToShoppingList();
        });
});

When("I open the shopping list", () => {
    ProductsActions.openShoppingList();
});

Then("the product should be displayed in the shopping list", function () {
    ProductsActions.validateProductAdded(this.productName);
});