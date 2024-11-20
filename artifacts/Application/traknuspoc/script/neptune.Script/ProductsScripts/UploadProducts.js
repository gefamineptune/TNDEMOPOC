// Set the File-Input to the oHTMLObject
sap.ui.getCore().attachInit(function(data) {
   // oHTMLObjectCameraUpload2.setContent('<input type="file" accept="image/*" id="file-input"  style="display:none" multiple>')
});

// Callback function from EventListener
function handleFileSelectProduct(f) {
    console.log("image")
    let reader = new FileReader();

    reader.onload = (function (theFile) {
        return function (e) {
            let binaryData = e.target.result;

            // Converting Binary Data to base 64
            let base64String = window.btoa(binaryData);

            let fullBase64picture = "data:image/png;base64," + base64String;
            ////console.log(base64String)

            ImageProfilePictureProduct.setSrc(fullBase64picture);

            //ButtonSavePicture.setEnabled(true);
            ImageBase64InvisibleProduct.setText(fullBase64picture);

        };
    })(f);
    reader.readAsBinaryString(f);
}