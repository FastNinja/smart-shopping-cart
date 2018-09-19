module.exports = class DefaultDeal {
  constructor() {}

  calculateTotal(itemCount, retailPrice) {
    return itemCount * retailPrice;
  }
};
