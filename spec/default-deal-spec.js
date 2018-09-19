const expect = require("chai").expect;
const DefaultDeal = require("../app/deals/default-deal");

describe("default-deal", () => {
  it("calculates price as normal", () => {
    const deal = new DefaultDeal();
    const totalPrice = deal.calculateTotal(1, 77);
    expect(totalPrice).to.equal(77);
  });

  it("it keeps cents", () => {
    const deal = new DefaultDeal();
    const totalPrice = deal.calculateTotal(2, 1.99);
    expect(totalPrice).to.equal(3.98);
  });
});
