refreshDataProducts();

let filename = Filename.getText();

//console.log(filename.replace(window.location.origin + "/media/root/", ""));

if(IdInvisible2 === "") {

    deleteImageFromMedia(filename.replace(window.location.origin + "/media/root/", ""));

}

oApp.to(Products)
