if (InputWarehouseAreaName.getValue() === "" || InputWarehouseAreaDescription.getValue() === "" ||
    InputWarehouseAreaName.getValue() === undefined || InputWarehouseAreaDescription.getValue() === undefined) {

    sap.m.MessageToast.show("Harap lengkapi isian data");

} else {

    let data = {
        "id" : IdInvisibleWarehoueArea.getText(),
         "warehouse_id": IdInvisibleWarehouseDetail.getText(),
        "name": InputWarehouseAreaName.getValue(),
        "description": InputWarehouseAreaDescription.getValue()
    }

    updateDataWarehouseArea(data)

    let options = {
        parameters: {
            "where": JSON.stringify({"warehouse_id" : IdInvisibleWarehouseDetail.getText()})
        }
    };

    apiGetWarehouseAreas(options);

    sap.m.MessageToast.show("Data Warehouse Area berhasil diupdate");

    ModalWarehouseArea.hide();
}