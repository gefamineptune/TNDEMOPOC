function sendChatWhatsApp() {
    let options = {
        data: {
            "phoneNumber": inSimpleFormphoneNumber.getValue(),
            "text": inSimpleFormtext.getValue()
        }
    };

    apiSendWhatsApp(options);

    Button.setEnabled(true);

}