function insertDataRequestOrder(data) {

    let options = {
        data: {
            "requested_by": data.requested_by,
            "requested_date": data.requested_date,
            "product_id": data.product_id,
            "quantity": data.quantity,
            "status": data.status,
            "workflow_id": data.workflow_id
        }
    };

    apiCreateRequestOrder(options);
}

function updateDataRequestOrder(data) {
    let options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id})
        },
        data: {
           "requested_by": data.requested_by,
            "requested_date": data.requested_date,
            "product_id": data.product_id,
            "quantity": data.quantity,
            "status": data.status
        }
    };

    apiUpdateRequestOrder(options);
}

function deleteDataRequestOrder(id) {

    let options = {
        parameters: {
            "where": JSON.stringify({"id" : id})
        }
    };

    apiDeleteRequestOrder(options);
}