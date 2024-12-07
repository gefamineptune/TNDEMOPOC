try {
    var statusAction = ""
    var currentStatus = ""
    var requestId = ""
    var nextStatus = ""

    log.info("Checking for wfData...")
    if (typeof wfData !== "undefined") {
        log.info("Found wfData...")
        statusAction = wfData.fromAction
        currentStatus = wfData.currentStatus
        requestId = wfData.objectKey
        log.info("Parameters found: ", statusAction, currentStatus, requestId)
    }

    log.info("Checking for formData...")
    if (typeof req !== "undefined") {
        log.info("Found formData...")
        let formData = req.body
        statusAction = "Approve"
        requestId = formData.RequestId
        log.info("Parameters found: ", statusAction, currentStatus, requestId)
    } 

    log.info("Running Approval Process")
    if (statusAction !== "Approve") { return }

    await entities.request_orders
        .createQueryBuilder()
        .update()
        .set({ "status": "Shipping" })
        .where("workflow_id = :requestId", { requestId: requestId })
        .execute()

    await entities.requestorderworkflowtable
        .createQueryBuilder()
        .update()
        .set({ "workflow_status": "Shipping" })
        .where("request_id = :requestId", { requestId: requestId })
        .execute()
    
    if (typeof wfData !== "undefined") {
        wfData.result = "True";
    }
} catch (e) {
    log.error("Workflow Approve Failed: ", e)
    wfData.result = false
} finally {
    complete()
}