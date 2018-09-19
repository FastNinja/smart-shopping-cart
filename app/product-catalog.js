module.exports = class ProductCatalog {
  constructor() {
    this.catalog = [];
  }

  addProduct(id, retailPrice) {
    this.catalog.push({
      id,
      retailPrice
    });
  }

  listProducts() {
    return this.catalog;
  }

  isValidProduct(id) {
    return this.catalog.some(x => x.id === id);
  }
};
