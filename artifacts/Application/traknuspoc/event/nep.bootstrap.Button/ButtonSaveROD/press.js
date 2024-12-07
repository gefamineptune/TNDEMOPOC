if(SelectRequestedBy.getSelectedKey() === undefined || SelectProductId.getSelectedKey() === undefined ||
    InputROQuantity.getValue() === "" ||
    InputRORequestedDate.getValue() === undefined || InputROQuantity.getValue() === undefined) {

        sap.m.MessageToast.show("Harap lengkapi isian data atau memilih dropdown terlebih dahulu")
} else {
    let referenceWorkflowId = JSON.stringify(Date.now())
    let data = {
            requested_by : SelectRequestedBy.getSelectedKey(), 
            requested_date : InputRORequestedDate.getValue(), 
            product_id : SelectProductId.getSelectedKey(),
            quantity : InputROQuantity.getValue(),
            status : "In Progress",
            workflow_id: referenceWorkflowId,
        }
    
    // console.log(data);
    insertDataRequestOrder(data);
    
    apiGetRequestOrdersCustomersProducts();

    // Start the Workflow for Approvals
    // Step 1: Create the Record
    var options = {
        data: {
            "requested_by": data.requested_by,
            "requested_date": data.requested_date,
            "product_id": data.product_id,
            "quantity": data.quantity,
            "request_id": referenceWorkflowId,
            "workflow_status": SelectROStatus.getSelectedKey(),
        }
    };

    apiStartWorkflowPUT(options);

    // Step 2: Start the workflow process
    // Use this script in your App or from external systems
    const wfData = {
        "id": '2c9a4940-6708-4df5-9fb3-2bb156f86cfa',
        "objectType": "TrakNusWorkflow",
        "objectKey": referenceWorkflowId,
        "amount": "0",
        "currency": "",
        "approver": ""
    }

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/functions/WorkflowInbox/Start", // Remember full path if triggered externally;
        data: JSON.stringify(wfData),
        success: function(data) {
            // Success Handler
        },
        error: function(result, status) {
            // Error Handler
        }
    });

    // Clear out QR Code to prepare for next record
    $("#QRImageContainer").empty()

    oApp.to(RequestOrder)

    sap.m.MessageToast.show("Data berhasil ditambahkan")

}



