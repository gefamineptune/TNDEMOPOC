let requestId = WorkflowIdInvisibleROD.getText()
var options = {
    data: {
        "RequestId": requestId
    }
};

apiRejectRequest(options);
oApp.to(RequestOrder)

sap.m.MessageToast.show("Request has been rejected")

// var wfData = {
    
// }

// $.ajax({
//     type: "POST",
//     contentType: "application/json",
//     url: "/api/functions/WorkflowInbox/Reject", // Remember full path if triggered externally;
//     data: JSON.stringify(wfData),
//     success: function(data) {
//         // Success Handler
//     },
//     error: function(result, status) {
//         // Error Handler
//     }
// });