function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
    let image = "data:image/jpeg;base64," + imageData;
    smallImage.setHeight("300px");
    smallImage.setWidth("200px");
    smallImage.setSrc(image);
    MessagePage.setVisible(false);
    oPanel.setVisible(true);
    oTextArea.setVisible(false);
    ButtonBeginOCR.setVisible(true);
    ButtonBeginOCR.setEnabled(true);
}

function changeSmallImage(imageData) {
    let image = "data:image/jpeg;base64," + imageData;
    smallImage.setHeight("300px");
    smallImage.setWidth("200px");
    smallImage.setSrc(image);
}