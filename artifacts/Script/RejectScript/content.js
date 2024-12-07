try {
    log.info("Request")
    log.info(req)
    const formData = req.body

    var statusAction = ""
    var requestId = ""

    log.info("Checking wfdata...")
    if (typeof wfData !== 'undefined' && typeof wfData.fromAction !== 'undefined') {
        statusAction = wfData.fromAction
        requestId = wfData.objectKey
        log.info("wfData Properties", statusAction, requestId)
    }

    log.info("Checking formdata...")
    if (typeof formData !== 'undefined' && formData.RequestId !== 'undefined') {
        statusAction = "Reject"
        requestId = formData.RequestId
        log.info("formdata Properties", statusAction, requestId)
    }

    log.info("Checking Next Status")
    var nextStatus = "Rejected"
    if (statusAction !== "Reject") { return }

    log.info("Setting Rejected State")
    await entities.request_orders
        .createQueryBuilder()
        .update()
        .set({ "status": nextStatus })
        .where("workflow_id = :requestId", { requestId: requestId })
        .execute()

    await entities.requestorderworkflowtable
        .createQueryBuilder()
        .update()
        .set({ "workflow_status": nextStatus })
        .where("request_id = :requestId", { requestId: requestId })
        .execute()
    
    if (typeof wfData !== "undefined") {
        wfData.result = "False";
    }
} catch (e) {
    log.error("Workflow Reject Failed: ", e)
    wfData.result = false
} finally {
    complete()
}