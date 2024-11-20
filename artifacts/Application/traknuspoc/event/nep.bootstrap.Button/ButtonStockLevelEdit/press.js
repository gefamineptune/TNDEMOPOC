const context = oEvent.oSource.getBindingContext();
const data = context.getObject();

console.log(data);

populateStocksLevelPage(data);