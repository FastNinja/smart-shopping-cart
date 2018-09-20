const expect = require("chai").expect;
const { createShoppingCart } = require("../index");

const { CLASSIC, STANDOUT, PREMIUM } = require("../app/configuration/products");

describe("acceptance-smoke-tests", () => {
  beforeEach(() => {
    this.shoppingCart = createShoppingCart();
  });

  it("Default customer", () => {
    this.shoppingCart.addItem(CLASSIC);
    this.shoppingCart.addItem(STANDOUT);
    this.shoppingCart.addItem(PREMIUM);
    const total = this.shoppingCart.getTotals("Default");
    expect(total).to.equal(987.97);
  });

  it("SecondBite with discounts", () => {
    this.shoppingCart.addItem(CLASSIC);
    this.shoppingCart.addItem(CLASSIC);
    this.shoppingCart.addItem(CLASSIC);
    this.shoppingCart.addItem(PREMIUM);
    const total = this.shoppingCart.getTotals("SecondBite");
    expect(total).to.equal(934.97);
  });

  it("Axil Coffee Roasters with discounts", () => {
    this.shoppingCart.addItem(STANDOUT);
    this.shoppingCart.addItem(STANDOUT);
    this.shoppingCart.addItem(STANDOUT);
    this.shoppingCart.addItem(PREMIUM);
    const total = this.shoppingCart.getTotals("Axil Coffee Roasters");
    expect(total).to.equal(1294.96);
  });

  it("MYER with discounts", () => {
    this.shoppingCart.addItem(CLASSIC);
    this.shoppingCart.addItem(STANDOUT);
    this.shoppingCart.addItem(PREMIUM);
    this.shoppingCart.addItem(PREMIUM);
    const total = this.shoppingCart.getTotals("MYER");
    expect(total).to.equal(1372.96);
  });
});
