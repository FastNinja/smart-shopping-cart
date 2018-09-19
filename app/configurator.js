const ProductCatalog = require("./product-catalog");
const CustomerDeals = require("./customer-deals");
const BulkPurchaseDeal = require("./deals/bulk-purchase-deal");
const DiscountedPriceDeal = require("./deals/discounted-price-deal");
const DefaultDeal = require("./deals/default-deal");
const { CLASSIC, STANDOUT, PREMIUM } = require("./products");

module.exports = class Configurator {
  constructor() {}

  getProductCatalog() {
    this.productCatalog = new ProductCatalog();
    this.productCatalog.addProduct(CLASSIC, 269.99);
    this.productCatalog.addProduct(STANDOUT, 322.99);
    this.productCatalog.addProduct(PREMIUM, 394.99);
    return this.productCatalog;
  }

  getCustomerDeals() {
    this.customerDeals = new CustomerDeals(new DefaultDeal());

    this.customerDeals.addSpecialDeal("SecondBite", {
      [CLASSIC]: new BulkPurchaseDeal(3)
    });

    this.customerDeals.addSpecialDeal("Axil Coffee Roasters", {
      [STANDOUT]: new DiscountedPriceDeal(299.99)
    });

    this.customerDeals.addSpecialDeal("MYER", {
      [CLASSIC]: new BulkPurchaseDeal(5),
      [PREMIUM]: new DiscountedPriceDeal(389.99)
    });

    return this.customerDeals;
  }
};
