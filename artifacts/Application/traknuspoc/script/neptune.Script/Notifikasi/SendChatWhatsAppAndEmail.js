function sendWhatsAppAndEmail(customerId, approvalStatus) {
    var options = {
        data: {
            "customerId": customerId,
            "approvalStatus": approvalStatus
        }
    };

    apiSendWhatsAppAndEmail(options);

}