// console.log(ComboBoxWarehouse.getSelectedKey());
ComboBoxWarehouseArea.setSelectedKey("");
ComboBoxSelectStockLevelProduct.setSelectedKey("");
modelComboBoxSelectStockLevelProduct.setData(null);

var options = {
    parameters: {
        "where": JSON.stringify({"warehouse_id" : ComboBoxWarehouse.getSelectedKey()}),
    }
};

apiGetWarehouseArea(options);

checkingComboBox();