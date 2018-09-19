const expect = require("chai").expect;
const DiscountedPriceDeal = require("../app/deals/discounted-price-deal");

describe("discounted-price-deal", () => {
  it("ignores Retail price and applies discounted price", () => {
    const deal = new DiscountedPriceDeal(33.5);
    const totalPrice = deal.calculateTotal(1, 77);
    expect(totalPrice).to.equal(33.5);
  });
});
