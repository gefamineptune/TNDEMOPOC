// Custom Init - Happens only once when mounting the component
sap.ui.getCore().attachInit(function(startParams) {
    // Do your initialization logic here
    // You can access the start parameters from Cockpit Tile application settings (action tab) using the `startParams` parameter

    // Some operations may need to be delayed. You can use setTimeout to run them after a specified time
    setTimeout(function() {
        // Perform delayed operations here
        initMaps(-7.397, 110.644);
    }, 1000);
});


function MapTriggers() {

console.log("Lat : " + parseFloat(InputWarehouseLatitude.getValue()));
console.log("Longi : " + parseFloat(InputWarehouseLongitude.getValue()));


initMaps(parseFloat(InputWarehouseLatitude.getValue()), parseFloat(InputWarehouseLongitude.getValue()));
}




// Wait for the Google Maps API to be loaded
function initMaps(lat, longi) {

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
  zoom: 16
};

// Promise
loader
  .load()
  .then((google) => {
    const map = new google.maps.Map(document.getElementById("HBox1Map1"), mapOptions);

      // Create a marker
    let marker = new google.maps.Marker({
      position: { lat: lat, lng: longi },
      map: map,
      title: 'San Francisco'
    });
  })
  .catch(e => {
    // do something
  });

}

