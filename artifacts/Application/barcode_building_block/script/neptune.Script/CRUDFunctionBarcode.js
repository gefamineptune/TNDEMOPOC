function deleteDataBarcode(id) {

    let options = {
        parameters: {
            "where": JSON.stringify({"id" : id})
        }
    };

    apiDELETE_Barcode(options);
}

function insertDataBarcode(data){
     
    let options = {
        data: {
            "product_id": data.product_id,
            "number": data.number

        }
    };
    apiINSERT_Barcode(options);
}

function updateDataBarcode(data) {
    let options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id}) 
        },
        data: {
            "product_id": data.product_id,
            "number": data.number
        }
    };

    apiUPDATE_Barcode(options);
}