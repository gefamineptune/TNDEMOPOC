function populateForNewDataWarehouse() {

    ContainerWarehouseArea.setVisible(false);

    AddWarehouseDetail.setVisible(true);
    EditWarehouseDetail.setVisible(false);

    IdInvisibleWarehouseDetail.setText("");

    InputWarehouseName.setValue("");
    InputWarehouseDescription.setValue("");
    InputWarehouseAddress.setValue("");
    InputWarehouseLongitude.setValue("");
    InputWarehouseLatitude.setValue("");

    ButtonUpdateWarehouseDetail.setVisible(false);
    ButtonSaveWarehouseDetail.setVisible(true);

    ButtonUpdate.setVisible(false);
    ButtonSave.setVisible(true);
    HBox1Map1.setVisible(false);
}


function populateWarehouseDetailPage(data) {

    ContainerWarehouseArea.setVisible(true);

    let options = {
        parameters: {
            "where": JSON.stringify({"warehouse_id" : data.id})
        }
    };

    apiGetWarehouseAreas(options);

    AddWarehouseDetail.setVisible(false);
    EditWarehouseDetail.setVisible(true);

    IdInvisibleWarehouseDetail.setText(data.id);

    InputWarehouseName.setValue(data.name);
    InputWarehouseDescription.setValue(data.description);
    InputWarehouseAddress.setValue(data.address);
    InputWarehouseLongitude.setValue(data.longitude);
    InputWarehouseLatitude.setValue(data.latitude);

    ButtonUpdateWarehouseDetail.setVisible(true);
    ButtonSaveWarehouseDetail.setVisible(false);

   

    

}