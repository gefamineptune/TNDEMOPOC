if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function (data) {
        console.log(data.objectKey)
        var requestId = "1733278238845"//data.objectKey
        var options = {
            parameters: {
                "where": JSON.stringify({ "request_id": requestId})
            }
        }

        apiWorkflowGet(options)
    })
}