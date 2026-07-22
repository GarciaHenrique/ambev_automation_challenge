import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductApiActions from "../../../actions/api/ProductApiActions";
import ProductSchema from "../../../schemas/productsApi.schema";

When("I send a request to retrieve the product list", function () {
    return ProductApiActions.getProducts().then((response) => {
        this.apiResponse = response;
    });
});

Then("the response should contain a valid product list", function () {
    const { produtos } = this.apiResponse.body;
    expect(produtos).to.be.an("array");
    expect(produtos).to.not.be.empty;

    const product = produtos[0];
    expect(product).to.have.property("_id").that.is.a("string");
    expect(product).to.have.property("nome").that.is.a("string");
    expect(product).to.have.property("descricao").that.is.a("string");
    expect(product).to.have.property("preco").that.is.a("number");
    expect(product).to.have.property("quantidade").that.is.a("number");
});