const expect = require("chai").expect;
const BulkPurchaseDeal = require("../../app/deals/bulk-purchase-deal");

describe("bulk-purchase-deal", () => {
  it("gives normal prices if not reached bulk count", () => {
    const deal = new BulkPurchaseDeal(5);
    const totalPrice = deal.calculateTotal(4, 10);
    expect(totalPrice).to.equal(40);
  });

  it("gives bulk prices if reached bulk", () => {
    const deal = new BulkPurchaseDeal(5);
    const totalPrice = deal.calculateTotal(5, 10);
    expect(totalPrice).to.equal(40);
  });

  it("gives bulk price for multiple bulk groups", () => {
    const deal = new BulkPurchaseDeal(5);
    const totalPrice = deal.calculateTotal(10, 10);
    expect(totalPrice).to.equal(80);
  });

  it("but keeps full price for items that do not form bulk group", () => {
    const deal = new BulkPurchaseDeal(5);
    const totalPrice = deal.calculateTotal(6, 10);
    expect(totalPrice).to.equal(40 + 10);
  });
});
