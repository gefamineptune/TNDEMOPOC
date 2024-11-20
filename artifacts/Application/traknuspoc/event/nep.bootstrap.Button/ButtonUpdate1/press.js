if (Select.getSelectedKey() === "" || InputNumberBarcode.getValue() === "" )
    {
        sap.m.MessageToast.show("Harap lengkapi isian data")
    }
    else {
        let data = {
                    id : IdInvisibleBarcodeDetail.getText(),
                    product_id : Select.getSelectedKey(),
                    number : InputNumberBarcode.getValue()
                }
    
    updateDataBarcode(data);
    apiGetBarcodeJoinProduct();
    sap.m.MessageToast.show("Data berhasil diUpdate")
    oApp.to(Barcode)
}
