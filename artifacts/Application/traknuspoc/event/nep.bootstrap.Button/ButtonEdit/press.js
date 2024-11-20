//UNCOMMENT KEMBALI JIKA IMAGE VALUE SUDAH TERSEDIA DARI DB
//ATAU BOLEH PINDAHKAN CODE INI KE DALAM POPULATEUSERDETAILSPAGE FUNCTION
// const image = document.getElementById('ProfilePicture');
// const imageUrl = image.getAttribute('src');

// Image1.setSrc(encodeURI(imageUrl));
///////
const context = oEvent.oSource.getBindingContext();

const data = context.getObject();

populateUserDetailsPage(data);

oApp.to(UserDetailsPage)
