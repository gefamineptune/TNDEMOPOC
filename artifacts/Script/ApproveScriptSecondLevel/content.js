try {
    var statusAction = ""
    var currentStatus = ""
    var requestId = ""
    var nextStatus = ""

    log.info("Running Second Level Approval")
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
        .set({ "status": "Complete" })
        .where("workflow_id = :requestId", { requestId: requestId })
        .execute()

    await entities.request_orders
        .createQueryBuilder()
        .update()
        .set({ "workflow_status": "Complete" })
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