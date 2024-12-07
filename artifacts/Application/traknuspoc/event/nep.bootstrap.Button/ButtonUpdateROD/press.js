if(SelectRequestedBy.getSelectedKey() === undefined || SelectProductId.getSelectedKey() === undefined ||
    SelectROStatus.getSelectedKey() === undefined || InputRORequestedDate.getValue() === "" || 
    InputROQuantity.getValue() === "" ||
    InputRORequestedDate.getValue() === undefined || InputROQuantity.getValue() === undefined) {

        sap.m.MessageToast.show("Harap lengkapi isian data atau memilih dropdown terlebih dahulu")
} else {

    let data = {
            id : IdInvisibleROD.getText(),
            requested_by : SelectRequestedBy.getSelectedKey(), 
            requested_date : InputRORequestedDate.getValue(), 
            product_id : SelectProductId.getSelectedKey(),
            quantity : InputROQuantity.getValue(),
            status : SelectROStatus.getSelectedKey()
        }
    
    // console.log(data);

    updateDataRequestOrder(data);

    apiGetRequestOrdersCustomersProducts();
    $("#QRImageContainer").empty()

    oApp.to(RequestOrder)

    sap.m.MessageToast.show("Data berhasil diupdate")
}



