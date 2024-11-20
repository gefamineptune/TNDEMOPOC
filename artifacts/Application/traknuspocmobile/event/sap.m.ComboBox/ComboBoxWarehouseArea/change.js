// console.log(ComboBoxWarehouse.getSelectedKey());
ComboBoxSelectStockLevelProduct.setSelectedKey("");

var options = {
    data: {
        "warehouseId": ComboBoxWarehouse.getSelectedKey(),
        "areaId": ComboBoxWarehouseArea.getSelectedKey()
    }
};

apiGetJoinStockLevelProduct(options);

checkingComboBox();