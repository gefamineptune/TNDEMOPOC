if(SelectWarehouse.getSelectedKey() === "" || SelectWarehouse.getSelectedKey() === undefined ||
    SelectWarehouseArea.getSelectedKey() === "" || SelectWarehouseArea.getSelectedKey() === undefined    
) {
    sap.m.MessageToast.show("Please choose Warehouse and Warehouse Area");
} else {

    let dataCreate = {
        "warehouseId" : SelectWarehouse.getSelectedKey(),
        "areaId" : SelectWarehouseArea.getSelectedKey(),
        "conductedBy" : "5c14e350-cb06-468b-9aff-7cedb15ea444",
        "sessionDate" : new Date(),
        "status" : "On Progress",
        "createdBy" : "admin",
        "updatedBy" : "admin"
    }

    createStockOpnameSession(dataCreate);

    var options = {
        data: {
            "warehouseId": SelectWarehouse.getSelectedKey(),
            "areaId": SelectWarehouseArea.getSelectedKey()
        }
    };

    let data = await apiGetJoinStockLevelProduct(options);    

    ContainerStockLevelProduct.setVisible(true);
    ButtonStart.setEnabled(false);
    ButtonStop.setVisible(true);

    ModalWWArea.hide();

    if(data.length > 0) {
        
        initQuagga();
    }


    
    
}