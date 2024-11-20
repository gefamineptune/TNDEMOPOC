function populateNewDataBarcode() {
    InputNumberBarcode.setValue("");
    Select.setSelectedKey('');
    IdInvisibleBarcodeDetail.setText("");
    ButtonUpdate1.setVisible(false);
    ButtonSave1.setVisible(true);
    AddBarcode.setVisible(true);
    EditBarcode.setVisible(false);
}

function populateBarcodeDetail(data){

    let options = {
        parameters: {
            "where": JSON.stringify({"barcode_id" : data.barcode_id})
        }
    };
    apiGET_Barcode(options);
    IdInvisibleBarcodeDetail.setText(data.barcode_id)
    InputNumberBarcode.setValue(data.barcode_number);
    Select.setSelectedKey(data.product_id);

    apiGET_Products(options);

    ButtonUpdate1.setVisible(true);
    ButtonSave1.setVisible(false);
    AddBarcode.setVisible(false);
    EditBarcode.setVisible(true);
}

