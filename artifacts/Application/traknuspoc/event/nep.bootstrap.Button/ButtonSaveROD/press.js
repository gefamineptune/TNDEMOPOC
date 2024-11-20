if(SelectRequestedBy.getSelectedKey() === undefined || SelectProductId.getSelectedKey() === undefined ||
    SelectROStatus.getSelectedKey() === undefined || InputRORequestedDate.getValue() === "" || 
    InputROQuantity.getValue() === "" ||
    InputRORequestedDate.getValue() === undefined || InputROQuantity.getValue() === undefined) {

        sap.m.MessageToast.show("Harap lengkapi isian data atau memilih dropdown terlebih dahulu")
} else {

    let data = {
            requested_by : SelectRequestedBy.getSelectedKey(), 
            requested_date : InputRORequestedDate.getValue(), 
            product_id : SelectProductId.getSelectedKey(),
            quantity : InputROQuantity.getValue(),
            status : SelectROStatus.getSelectedKey()
        }
    
    // console.log(data);

    insertDataRequestOrder(data);

    apiGetRequestOrdersCustomersProducts();

    oApp.to(RequestOrder)

    sap.m.MessageToast.show("Data berhasil ditambahkan")

}



