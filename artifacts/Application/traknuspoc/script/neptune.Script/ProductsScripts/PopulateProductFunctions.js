function  populateForNewDataProducts() {
    ButtonUpdate2.setVisible(false);
    ButtonSave2.setVisible(true);
    AddProduct.setVisible(true);
    EditProduct.setVisible(false);


     Input17.setValue("");
     Input18.setValue("");
     Input19.setValue("");
     Input20.setValue("");
     IdInvisible2.setText("");
     Filename.setText("");
     ImageProfilePictureProduct.setSrc("");
     ContainerAddWarehouseArea_StockLevel.setVisible(false);
     HBoxStocksLevelAction.setVisible(false);
}


function populatePageProducts(data) {

    ButtonUpdate2.setVisible(true);
    ButtonSave2.setVisible(false);
    AddProduct.setVisible(false);
    EditProduct.setVisible(true);

    IdInvisible2.setText(data.id);
    Input17.setValue(data.name);
    Input18.setValue(data.SKU);
    Input19.setValue(data.description);
    Input20.setValue(data.unit);
    ImageProfilePictureProduct.setSrc(data.image_path);
    Filename.setText(data.image_path);
    ContainerAddWarehouseArea_StockLevel.setVisible(true);
    HBoxStocksLevelAction.setVisible(true);

    let options = {
        data: {
            "productid" : IdInvisible2.getText()
        }
    };

    apiJoinTable_StocksLevel(options);

    // Input3.setValue(data.Address);

    // Input2.setValue(data.PhoneNumber);

    // DatePicker.setValue(formatDateForInput(data.DateOfBirth));

    // CheckBox.setSelected(data.IsActive);

    // ImageProfilePicture.setSrc(data.ProfilePicturePath);
    // ImageBase64Invisible.setText(data.ProfilePicturePath);

    // IdInvisible.setText(data.id);
    // console.log(populateUserDetailsPage);
    


}