sap.ui.getCore().attachInit(function (startParams) {
    document.addEventListener("deviceready", onDeviceReady, false);

    if (window.cordova) {
        oBtnUpload.setVisible(true);
        oFileUploader.setVisible(false);
        oBtnCamera.setVisible(true);
    } else {
        oBtnUpload.setVisible(false);
        oFileUploader.setVisible(true);
        oBtnCamera.setVisible(false);
    }
});

let imageData = [];
let resultOCR = [];