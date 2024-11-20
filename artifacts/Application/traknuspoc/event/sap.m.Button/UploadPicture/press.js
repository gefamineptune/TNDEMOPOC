const fileInput = FlexBoxUploadPicture.getDomRef();
    fileInput.addEventListener('change', (e) => handleFileSelect(e.target.files[0]));

let fileElem = document.getElementById("file-input");
fileElem.click();