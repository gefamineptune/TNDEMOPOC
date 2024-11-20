if (Select.getSelectedKey() === "" || InputNumberBarcode.getValue() === "" )
    {
        sap.m.MessageToast.show("Harap lengkapi isian data")
    }
    else {
        let data = {
                    product_id : Select.getSelectedKey(),
                    number : InputNumberBarcode.getValue()
                }

    insertDataBarcode(data);
    apiGetBarcodeJoinProduct();
    sap.m.MessageToast.show("Data berhasil ditambahkan")
    oApp.to(Barcode)
}