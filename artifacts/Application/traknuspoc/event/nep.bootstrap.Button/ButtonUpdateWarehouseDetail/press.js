if(InputWarehouseName.getValue() === "" || InputWarehouseDescription.getValue() === "" || 
    InputWarehouseLongitude.getValue() === "" || InputWarehouseLatitude.getValue() === "" || 
    InputWarehouseName.getValue() === undefined || InputWarehouseDescription.getValue() === undefined || 
    InputWarehouseLongitude.getValue() === undefined || InputWarehouseLatitude.getValue() === undefined) {

        sap.m.MessageToast.show("Harap lengkapi isian data")
} else {

    let data = {
            id : IdInvisibleWarehouseDetail.getText(),
            name : InputWarehouseName.getValue(), 
            description : InputWarehouseDescription.getValue(), 
            address : InputWarehouseDescription.getValue(),
            longitude : InputWarehouseLongitude.getValue(),
            latitude : InputWarehouseLatitude.getValue()
        }

    updateDataWarehouse(data);

    apiGetWarehouses();

    oApp.to(WarehouseLocation)

    sap.m.MessageToast.show("Data berhasil diupdate");

}