function insertDataWarehouse(data) {
    let options = {
        data: {
            "name": data.name,
            "description": data.description,
            "address": data.address,
            "longitude": data.longitude,
            "latitude": data.latitude,
        }
    };

    apiCreateWarehouse(options);
}

function updateDataWarehouse(data) {
    let options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id})
        },
        data: {
            "name": data.name,
            "description": data.description,
            "address": data.address,
            "longitude": data.longitude,
            "latitude": data.latitude,
        }
    };

    apiUpdateWarehouse(options);
}

function deleteDataWarehouse(id) {

    let options = {
        parameters: {
            "where": JSON.stringify({"id" : id})
        }
    };

    apiDeleteWarehouse(options);
}