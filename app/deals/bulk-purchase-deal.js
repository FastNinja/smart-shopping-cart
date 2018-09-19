module.exports = class BulkPurchaseDeal {
  constructor(bulkCount) {
    this.bulkCount = bulkCount;
  }

  calculateTotal(itemCount, retailPrice) {
    const freeItems = Math.floor(itemCount / this.bulkCount);
    return (itemCount - freeItems) * retailPrice;
  }
};
