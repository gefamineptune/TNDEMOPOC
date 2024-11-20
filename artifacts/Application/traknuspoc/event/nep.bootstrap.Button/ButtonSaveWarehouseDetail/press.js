if(InputWarehouseName.getValue() === "" || InputWarehouseDescription.getValue() === "" || 
    InputWarehouseLongitude.getValue() === "" || InputWarehouseLatitude.getValue() === "" || 
    InputWarehouseName.getValue() === undefined || InputWarehouseDescription.getValue() === undefined || 
    InputWarehouseLongitude.getValue() === undefined || InputWarehouseLatitude.getValue() === undefined) {

        sap.m.MessageToast.show("Harap lengkapi isian data")
} else {

    let data = {
            name : InputWarehouseName.getValue(), 
            description : InputWarehouseDescription.getValue(), 
            address : InputWarehouseDescription.getValue(),
            longitude : InputWarehouseLongitude.getValue(),
            latitude : InputWarehouseLatitude.getValue()
        }

    insertDataWarehouse(data);

    apiGetWarehouses();

    oApp.to(WarehouseLocation)

    sap.m.MessageToast.show("Data berhasil ditambahkan, silahkan melakukan edit untuk menambahkan Warehouse Area")

}



