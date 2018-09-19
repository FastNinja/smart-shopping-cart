module.exports = class ShoppingCart {
  constructor(customerDeals, productCatalog) {
    this.customerDeals = customerDeals;
    this.productCatalog = productCatalog;
    this.items = [];
  }

  addItem(productId) {
    if (!this.productCatalog.isValidProduct(productId)) {
      throw new Error(`product '${productId}' is unknown`);
    }
    this.items.push(productId);
  }

  getTotals(customer) {
    if (!customer) {
      throw new Error(`customer is required for calulating total`);
    }
    const productList = this.productCatalog.listProducts();

    return productList
      .map(product => {
        const deal = this.customerDeals.getDealForCustomer(
          customer,
          product.id
        );
        const productItems = this.items.filter(
          productId => productId === product.id
        );

        return deal.calculateTotal(productItems.length, product.retailPrice);
      })
      .reduce((total, current) => {
        return total + current;
      });
  }
};
