const expect = require("chai").expect;
const CustomerDeals = require("../app/customer-deals");
const DefaultDeal = require("../app/deals/default-deal");
const DiscountedPriceDeal = require("../app/deals/discounted-price-deal");

describe("customer-deals", () => {
  before(() => {
    this.defaultDeal = new DefaultDeal();
    this.discountedDeal = new DiscountedPriceDeal(100);
    this.customerDeals = new CustomerDeals(this.defaultDeal);
    this.customerDeals.addSpecialDeal("Special Customer", {
      "discounted product id": this.discountedDeal
    });
  });

  it("returns default deal is not special deals exist", () => {
    const deal = this.customerDeals.getDealForCustomer("Any Generic customer");
    expect(deal).to.equal(this.defaultDeal);
  });

  it("returns special deal for Special Customer for configured product", () => {
    const deal = this.customerDeals.getDealForCustomer(
      "Special Customer",
      "discounted product id"
    );
    expect(deal).to.equal(this.discountedDeal);
  });

  it("returns defalt deal for Special Customer for all other products", () => {
    const deal = this.customerDeals.getDealForCustomer(
      "Special Customer",
      "fullprice product id"
    );
    expect(deal).to.equal(this.defaultDeal);
  });
});
