function startOpnameSession() {
    if(ComboBoxWarehouse.getSelectedKey() === "" || ComboBoxWarehouseArea.getSelectedKey() === "" ||
    ComboBoxSelectStockLevelProduct.getSelectedKey() === "") {

    sap.m.MessageToast.show("Please choose all the Select dropdown");

    } else {

        let dataCreate = {
            "warehouseId" : ComboBoxWarehouse.getSelectedKey(),
            "areaId" : ComboBoxWarehouseArea.getSelectedKey(),
            "conductedBy" : "5c14e350-cb06-468b-9aff-7cedb15ea444",
            "sessionDate" : new Date(),
            "status" : "On Progress",
            "createdBy" : "admin",
            "updatedBy" : "admin"
        }

        createStockOpnameSession(dataCreate);        

        ButtonStart.setEnabled(false);
        ButtonStart.setVisible(false);
        ButtonStop.setVisible(true);

        VboxStatus.setVisible(true);

        TextStatusScan.setVisible(true);

        ComboBoxWarehouse.setEnabled(false);
        ComboBoxWarehouseArea.setEnabled(false);
        // ComboBoxSelectStockLevelProduct.setEnabled(false);

        startScan();
    }
}

function getDataBarcode() {
    var options = {
            parameters: {
                "where": JSON.stringify({"product_id" : ComboBoxSelectStockLevelProduct.getSelectedKey()})
            }
        };

        apiGetBarcode(options);
}

function stopOpnameSession() {
    stopScan();

    for(let dataScanned of tempDataScannedProduct) {
        let data = {
            "sessionId" : dataScanned.sessionId,
            "productId" : dataScanned.productId,
            "scannedBy" : "5c14e350-cb06-468b-9aff-7cedb15ea444",
            "scannedAt" : new Date(),
            "scannedQuantity" : dataScanned.scannedQuantity,
            "systemQuantity" : dataScanned.systemQuantity,
            "difference" : dataScanned.difference
        }

        createStockOpnameDetail(data);
    }

    tempDataScannedProduct = []

    TextStatusScan.setVisible(false);

    ButtonStart.setEnabled(true);
    ButtonStart.setVisible(true);
    ButtonStop.setVisible(false);

    VboxStatus.setVisible(false);

    ComboBoxWarehouse.setSelectedKey("");
    ComboBoxWarehouseArea.setSelectedKey("");
    ComboBoxSelectStockLevelProduct.setSelectedKey("");

    ComboBoxWarehouse.setEnabled(true);
    ComboBoxWarehouseArea.setEnabled(true);
    // ComboBoxSelectStockLevelProduct.setEnabled(true);
}

function onBarcodeDetected(code) {

    let dataBarcode = modelModelObjectDataBarcode.getData();

    if(isScanningEnabled) {

        isScanningEnabled = false;

        TextStatusScan.setBackgroundColor("Danger");
        TextStatusScan.setText("NOT READY TO SCAN");

        if(code === dataBarcode[0].number) {

            showToast("Success", "Data barcode sama dengan hasil scan");

            populateTempDataScanned();
           
        }

        setTimeout(() => {

            isScanningEnabled = true;

            TextStatusScan.setBackgroundColor("Success");
            TextStatusScan.setText("READY TO SCAN");
        }, scanDelay)
    }

   
}