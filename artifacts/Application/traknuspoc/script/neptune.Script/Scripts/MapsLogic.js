// // Custom Init - Happens only once when mounting the component
// sap.ui.getCore().attachInit(function(startParams) {
//     // Do your initialization logic here
//     // You can access the start parameters from Cockpit Tile application settings (action tab) using the `startParams` parameter

//     // Some operations may need to be delayed. You can use setTimeout to run them after a specified time
//     setTimeout(function() {
//         // Perform delayed operations here
//         initMaps(-7.397, 110.644);
//     }, 1000);
// });


function MapTriggers() {

console.log("Lat : " + parseFloat(InputWarehouseLatitude.getValue()));
console.log("Longi : " + parseFloat(InputWarehouseLongitude.getValue()));


initMaps(parseFloat(InputWarehouseLatitude.getValue()), parseFloat(InputWarehouseLongitude.getValue()));
}




// Wait for the Google Maps API to be loaded
function initMaps(lat, longi, latUser, longUser) {

 const loader = new google.maps.plugins.loader.Loader({
  apiKey: "AIzaSyBS81ZrA_57A-xzbLo3zIREb2bkQaqmpK8",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: lat,
    lng: longi
  },
  zoom: 11
};

// Promise
loader
  .load()
  .then((google) => {
    const map = new google.maps.Map(document.getElementById("HBox1Map"), mapOptions);

    // Create a marker
    let marker1 = new google.maps.Marker({
      position: { lat: latUser, lng: longUser },
      map: map,
      title: 'Lokasi Sekarang'
    });

    let marker2 = new google.maps.Marker({
      position: { lat: lat, lng: longi },
      map: map,
      title: 'Lokasi Warehouse'
    });

    const infoWindow1 = new google.maps.InfoWindow({
      content : `
        <div>
          <h5>Lokasi Anda</h5>
          <h6>Latitude : ${latUser}</h6>
          <h6>Longitude : ${longUser}</h6>
        </div>
      `
    })

    const infoWindow2 = new google.maps.InfoWindow({
      content : `
        <div>
          <h5>Lokasi Warehouse</h5> 
          <h6>Latitude : ${lat}</h6>
          <h6>Longitude : ${longi}</h6>
        </div>
        `
    })

    marker1.addListener("click", () => {
      infoWindow1.open(map, marker1);
    })

    marker2.addListener("click", () => {
      infoWindow2.open(map, marker2);
    })

  })
  .catch(e => {
    sap.m.MessageToast.show("Error on show map")
    console.log(e);
  });

}

async function getLocation() {
    if ("geolocation" in navigator) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let latitude = position.coords.latitude;
                    let longitude = position.coords.longitude;
                    resolve({
                        latitude: latitude,
                        longitude: longitude
                    });
                },
                (error) => {
                    reject(error);
                }
            );
        });
    } else {
        // sap.m.MessageToast.show("Geolocation is not supported by this browser")
        throw new Error("Geolocation is not supported by this browser");
    }
}

