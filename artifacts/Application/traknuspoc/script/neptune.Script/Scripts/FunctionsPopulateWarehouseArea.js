function populateForNewDataWarehouseArea() {

    HeaderAddModalWarehouseArea.setVisible(true);
    HeaderEditModalWarehouseArea.setVisible(false);

    ButtonSimpanWarehouseArea.setVisible(true);
    ButtonUpdateWarehouseArea.setVisible(false);

    IdInvisibleWarehoueArea.setText("");

    InputWarehouseAreaName.setValue("");
    InputWarehouseAreaDescription.setValue("");

    showModalWarehouseArea(ModalWarehouseArea);

}

function populateWarehouseAreaDetailPage(data) {

    HeaderAddModalWarehouseArea.setVisible(false);
    HeaderEditModalWarehouseArea.setVisible(true);

    ButtonSimpanWarehouseArea.setVisible(false);
    ButtonUpdateWarehouseArea.setVisible(true);

    IdInvisibleWarehoueArea.setText(data.id);

    InputWarehouseAreaName.setValue(data.name);
    InputWarehouseAreaDescription.setValue(data.description);

    showModalWarehouseArea(ModalWarehouseArea);

}