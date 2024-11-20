let dataStockLevel = modelModelArrayDataStockLevelProducts.getData();

for (let i = 0; i < dataStockLevel.length; i++) {
    if(dataStockLevel[i].p_id === ComboBoxSelectStockLevelProduct.getSelectedKey()) {
        modelModelObjectChoosenStockLevelProduct.setData(dataStockLevel[i]);
    }
}

checkingComboBox();
getDataBarcode();

