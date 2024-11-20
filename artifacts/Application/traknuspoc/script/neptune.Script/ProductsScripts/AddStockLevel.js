function populateForNewDataStocksLevel() {

    HeaderAddModalStocksLevel.setVisible(true);
    HeaderEditStocksLevel.setVisible(false);

    IdInvisibleProduct.setText(IdInvisible2.getText());
    IdInvisibleStocksLevel.setText("");

    InputStocksLevelName.setValue("");

    SelectWarehouseStocksLevel.setSelectedKey("");
    SelectAreaStocksLevel.setSelectedKey("");
    StocksLevelQuantity.setValue("");
    InputBatchNumber.setValue("");
    ExpiryDateInput.setValue("");
    
    ButtonSimpanStocksLevel.setVisible(true);
    HeaderEditStocksLevel1.setVisible(false);
    ButtonBackStocksLevel.setVisible(true);


    showModalStocksLevel(ModalStocksLevel);

}

function populateStocksLevelPage(data){
    HeaderAddModalStocksLevel.setVisible(true);
    HeaderEditStocksLevel.setVisible(false);

    IdInvisibleProduct.setText(IdInvisible2.getText());
    IdInvisibleStocksLevel.setText(data.stocklevels_id);

     SelectWarehouseStocksLevel.setSelectedKey(data.stocklevels_warehouse_id);
    SelectAreaStocksLevel.setSelectedKey(data.stocklevels_area_id);
    StocksLevelQuantity.setValue(data.stocklevels_quantity);
    InputBatchNumber.setValue(data.stocklevels_batch_number);

    if(data.stocklevels_expiry_date !== "")
    {
        let datePart = data.stocklevels_expiry_date.split(' ')[0]
        ExpiryDateInput.setValue(datePart);
        console.log("IN" + datePart);
    }
    else {
        ExpiryDateInput.setValue("");
    }

    InputStocksLevelName.setValue("");
    
    ButtonSimpanStocksLevel.setVisible(false);
    HeaderEditStocksLevel1.setVisible(true);
    ButtonBackStocksLevel.setVisible(true);


    showModalStocksLevel(ModalStocksLevel);
}
