let file = FileUploader.oFileUpload.files[0];

// console.log(file);

let reader = new FileReader();

reader.onload = function(event) {
    let imageContent = event.target.result;
    console.log(imageContent);
}

// let base = reader.readAsDataURL(file);
// console.log(base);
