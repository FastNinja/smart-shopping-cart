const expect = require("chai").expect;
const CustomerDeals = require("../app/customer-deals");
const DefaultDeal = require("../app/deals/default-deal");
const DiscountedPriceDeal = require("../app/deals/discounted-price-deal");

describe("customer-deals", () => {
  before(() => {
    this.defaultDeal = new DefaultDeal();
    this.discountedDeal = new DiscountedPriceDeal(100);
    this.customerDeals = new CustomerDeals(this.defaultDeal);
  });

  it("returns default deal for all customers", () => {
    const deal = this.customerDeals.getDealForCustomer(
      "Any Generic customer",
      "product 1"
    );
    expect(deal).to.equal(this.defaultDeal);
  });

  describe("when special deal is configured for customer and product", () => {
    before(() => {
      this.customerDeals.addSpecialDeal("Special Customer", {
        "discounted product id": this.discountedDeal
      });
    });

    it("returns special deal if customer and product match", () => {
      const deal = this.customerDeals.getDealForCustomer(
        "Special Customer",
        "discounted product id"
      );
      expect(deal).to.equal(this.discountedDeal);
    });

    it("returns default deal if customer match but product does not match", () => {
      const deal = this.customerDeals.getDealForCustomer(
        "Special Customer",
        "fullprice product id"
      );
      expect(deal).to.equal(this.defaultDeal);
    });
  });
});
