module.exports = class CustomerDeals {
  constructor(defaultDeal) {
    this.defaultDeal = defaultDeal;
    this.specialDeals = {};
  }

  addSpecialDeal(customer, deals) {
    this.specialDeals[customer] = deals;
  }

  getDealForCustomer(customer, product) {
    const special = this.specialDeals[customer];
    if (!special) {
      return this.defaultDeal;
    }

    return special[product] || this.defaultDeal;
  }
};
