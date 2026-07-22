import BaseService from "./common/BaseService";
import Urls from "../constants/Urls";

class ProductService extends BaseService {

    getProducts() {
        return this.get(Urls.API.PRODUCTS);
    }

}

export default new ProductService();