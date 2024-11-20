if(Input17.getValue() === "" || Input18.getValue() === "" || 
    Input19.getValue() === "" || Input20.getValue() === "" || 
    Filename.getText() === "" ) {

        sap.m.MessageToast.show("Harap lengkapi isian data")
} else {

     let data = {
            name : Input17.getValue(), 
            SKU : Input18.getValue(), 
            description : Input19.getValue(),
            unit : Input20.getValue(),
            image_path : Filename.getText()
        }

    console.log(data);

    createDataProducts(data);

    oApp.to(Products)
    refreshDataProducts();

    sap.m.MessageToast.show("Data berhasil ditambahkan, silahkan melakukan edit untuk menambahkan Warehouse Area")

}



