import ProductService from "../../services/ProductService";

class ProductApiActions {

    getProducts() {
        return ProductService.getProducts();
    }
    
}

export default new ProductApiActions();