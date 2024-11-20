function checkingComboBox() {
    if (ComboBoxWarehouse.getSelectedKey() === "" || ComboBoxWarehouseArea.getSelectedKey() === "" ||
    ComboBoxSelectStockLevelProduct.getSelectedKey() === "") {
        ButtonStart.setEnabled(false);
    } else {
        ButtonStart.setEnabled(true);
    }
}

function showToast(severity,text) {
    Toast.setBackgroundColor(severity);
    Toast.setBorderColor(severity);
    TextToast.setText(text);

    Toast.clone().show();
}

function populateTempDataScanned() {

    let sessionId = modelModelObjectUUIDSOS.getData();
    let choosenProduct = modelModelObjectChoosenStockLevelProduct.getData();

    TextSessionId.setText("Session ID : " + sessionId.UUID);

    let filteredArray = []

    for(let tempData of tempDataScannedProduct) {
        if(tempData.productId === choosenProduct.p_id) {
            filteredArray = tempData;
        }
    }

    if(filteredArray.length === 0) {
        tempDataScannedProduct.push({
            "sessionId" : sessionId.UUID,
            "productId" : choosenProduct.p_id,
            "productName" : choosenProduct.p_name,
            "scannedAt" : new Date(),
            "scannedQuantity" : 1,
            "systemQuantity" : choosenProduct.sl_quantity,
            "difference" : choosenProduct.sl_quantity - 1
        })

        modelListScannedData.setData(tempDataScannedProduct);
    } else {

        for(let tempData of tempDataScannedProduct) {
            if(tempData.productId === choosenProduct.p_id) {
                tempData.scannedQuantity += 1
                tempData.difference -= 1
            }
        }

        modelListScannedData.setData(tempDataScannedProduct);
    }
}