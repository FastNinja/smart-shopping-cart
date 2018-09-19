module.exports = class DiscountedPriceDeal {
  constructor(discountedPrice) {
    this.discountedPrice = discountedPrice;
  }

  calculateTotal(itemCount, retailPrice) {
    return itemCount * this.discountedPrice;
  }
};
