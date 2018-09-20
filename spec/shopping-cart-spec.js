const expect = require("chai").expect;
const DefaultDeal = require("../app/deals/default-deal");
const DiscountedPriceDeal = require("../app/deals/discounted-price-deal");
const CustomerDeals = require("../app/customer-deals");
const ProductCatalog = require("../app/product-catalog");
const ShoppingCart = require("../app/shopping-cart");

const APPLE_PRICE = 10;
const ORANGE_PRICE = 100;
const ORANGE_DISCOUNTED_PRICE = 1;

describe("shopping-cart", () => {
  before(() => {
    this.productCatalog = new ProductCatalog();
    this.productCatalog.addProduct("apple", APPLE_PRICE);
    this.productCatalog.addProduct("orange", ORANGE_PRICE);

    this.customerDeals = new CustomerDeals(new DefaultDeal());
  });

  describe("for generic customers", () => {
    it("calculates total for one product", () => {
      const shoppingCart = new ShoppingCart(
        this.customerDeals,
        this.productCatalog
      );
      shoppingCart.addItem("apple");
      const totalPrice = shoppingCart.getTotals("Any Customer");
      expect(totalPrice).to.equal(APPLE_PRICE);
    });

    it("calculates total for multiple items of the same product", () => {
      const shoppingCart = new ShoppingCart(
        this.customerDeals,
        this.productCatalog
      );

      shoppingCart.addItem("apple");
      shoppingCart.addItem("apple");
      shoppingCart.addItem("apple");

      const totalPrice = shoppingCart.getTotals("Any Customer");
      expect(totalPrice).to.equal(APPLE_PRICE * 3);
    });

    it("calculates total for multiple items of the different products", () => {
      const shoppingCart = new ShoppingCart(
        this.customerDeals,
        this.productCatalog
      );

      shoppingCart.addItem("apple");
      shoppingCart.addItem("apple");
      shoppingCart.addItem("apple");

      shoppingCart.addItem("orange");
      shoppingCart.addItem("orange");

      const totalPrice = shoppingCart.getTotals("Any Customer");
      expect(totalPrice).to.equal(APPLE_PRICE * 3 + ORANGE_PRICE * 2);
    });
  });

  describe("for valued customers with configured discounts", () => {
    before(() => {
      this.customerDeals.addSpecialDeal("Valued Customer", {
        orange: new DiscountedPriceDeal(ORANGE_DISCOUNTED_PRICE)
      });
    });

    it("applies discount for Valued Customers", () => {
      const shoppingCart = new ShoppingCart(
        this.customerDeals,
        this.productCatalog
      );

      shoppingCart.addItem("apple");
      shoppingCart.addItem("orange");
      shoppingCart.addItem("orange");

      const totalPrice = shoppingCart.getTotals("Valued Customer");
      expect(totalPrice).to.equal(APPLE_PRICE + 2 * ORANGE_DISCOUNTED_PRICE);
    });
  });

  describe("for invalid input", () => {
    before(() => {});

    it("throw an error for unknown product", () => {
      const shoppingCart = new ShoppingCart(
        this.customerDeals,
        this.productCatalog
      );

      expect(() => shoppingCart.addItem("misterious")).to.throw(
        "product 'misterious' is unknown"
      );
    });

    it("throw an error if customer is not specified", () => {
      const shoppingCart = new ShoppingCart(
        this.customerDeals,
        this.productCatalog
      );

      expect(() => shoppingCart.getTotals(null)).to.throw(
        "customer is required for calulating total"
      );
    });
  });
});
