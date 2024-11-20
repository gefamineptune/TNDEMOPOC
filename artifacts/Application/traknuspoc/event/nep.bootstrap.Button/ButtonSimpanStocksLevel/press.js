if (
    InputBatchNumber.getValue() === undefined || 
    StocksLevelQuantity.getValue() === undefined ||
    SelectWarehouseStocksLevel.getSelectedKey() === undefined ||
    SelectAreaStocksLevel.getSelectedKey() === undefined||
    ExpiryDateInput.getValue() === undefined) {
    sap.m.MessageToast.show("Harap lengkapi isian data");
} else {
    let currentDate = new Date();
    //console.log(currentDate);

    let options = {
    data: {
        "id": "",
        "product_id": IdInvisibleProduct.getText(),
        "warehouse_id": SelectWarehouseStocksLevel.getSelectedKey(),
        "area_id": SelectAreaStocksLevel.getSelectedKey(),
        "quantity": StocksLevelQuantity.getValue(),
        "batch_number": InputBatchNumber.getValue(),
        "expiry_date": ExpiryDateInput.getValue(),
        "createdAt": currentDate,
        "createdBy": "",
        "updatedAt": "",
        "updatedBy": ""
    }
};

    console.log(options); 
    apiInsert_StockLevel(options);

    setTimeout(() => {
        console.log("Delayed for 1 second.");

        let options = {
        data: {
            "productid" : IdInvisible2.getText()
        }
    };

    apiJoinTable_StocksLevel(options);
    }, 100);

     

    sap.m.MessageToast.show("Data Warehouse Area berhasil ditambahkan");

    //hideModalStocksLevel(ModalStocksLevel);
    ModalStocksLevel.hide();
}