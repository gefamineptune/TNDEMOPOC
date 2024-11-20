function populateForNewDataRequestOrder() {
    
    AddRODetail.setVisible(true);
    EditRODetail.setVisible(false);

    IdInvisibleROD.setText("");

    InputRORequestedDate.setValue("");
    InputROQuantity.setValue("");

    ButtonSaveROD.setVisible(true);
    ButtonUpdateROD.setVisible(false);

}

function populateForUpdateDataRequestOrder(data) {

    AddRODetail.setVisible(false);
    EditRODetail.setVisible(true);

    IdInvisibleROD.setText(data.ro_id);

    let datePart = data.ro_requested_date.split(' ')[0]

    SelectRequestedBy.setSelectedKey(data.ro_requested_by);
    InputRORequestedDate.setValue(datePart);
    SelectProductId.setSelectedKey(data.ro_product_id);
    InputROQuantity.setValue(data.ro_quantity);
    SelectROStatus.setSelectedKey(data.ro_status);

    ButtonSaveROD.setVisible(false);
    ButtonUpdateROD.setVisible(true);

}