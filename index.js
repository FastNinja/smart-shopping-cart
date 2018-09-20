const { getProductCatalog } = require("./app/configuration/catalog-repository");
const {
  getCustomerDeals
} = require("./app/configuration/customer-deals-repository");
const { CLASSIC, STANDOUT, PREMIUM } = require("./app/configuration/products");
const ShoppingCart = require("./app/shopping-cart");

const deals = getCustomerDeals();
const catalog = getProductCatalog();

module.exports = {
  createShoppingCart() {
    return new ShoppingCart(deals, catalog);
  },
  products: { CLASSIC, STANDOUT, PREMIUM }
};
