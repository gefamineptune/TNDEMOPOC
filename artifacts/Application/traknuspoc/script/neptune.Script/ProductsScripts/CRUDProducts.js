function createDataProducts(data)
{
    let options = {
        data: {
            "name": data.name,
            "SKU": data.SKU,
            "description": data.description,
            "unit": data.unit,
            "image_path": data.image_path,
        }
    };

    apiInsert_Products(options);
}


function deleteDataProducts(data)
{
    let options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id})
        }
    };

    apiDelete_Products(options);

    let filename = data.image_path;
   // console.log(filename.replace(window.location.origin + "/media/root/", ""));
    deleteImageFromMedia(filename.replace(window.location.origin + "/media/root/", ""))
}


function updateDataProducts(data)
{
    let options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id}), // Optional 
            "take": 1
        }
    };

    let response = apiGET_SpesifikProducts(options);

    // let data = modelModelArray_Products.getData();
    // console.log("MODEL");
    // console.log(data);
    // console.log(data[0].image_path); 

    let filename = path_image;
    
    deleteImageFromMedia(filename.replace(window.location.origin + "/media/root/", ""))

    let optionsUpdateProduct = {
        parameters: {
            "where": JSON.stringify({"id" : data.id})
        },
         data: {
            "name": data.name,
            "SKU": data.SKU,
            "description": data.description,
            "unit": data.unit,
            "image_path": data.image_path,
        }
    };


    apiUpdate_Products(optionsUpdateProduct);   
}