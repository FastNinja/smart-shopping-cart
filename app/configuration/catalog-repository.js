const ProductCatalog = require("../product-catalog");
const { CLASSIC, STANDOUT, PREMIUM } = require("./products");

module.exports = {
  getProductCatalog() {
    this.productCatalog = new ProductCatalog();
    this.productCatalog.addProduct(CLASSIC, 269.99);
    this.productCatalog.addProduct(STANDOUT, 322.99);
    this.productCatalog.addProduct(PREMIUM, 394.99);
    return this.productCatalog;
  }
};
