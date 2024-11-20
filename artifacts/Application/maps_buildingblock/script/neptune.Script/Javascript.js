// // Wait for the page to load
// window.addEventListener('load', function() {
//   // Initialize the map
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: 37.7749, lng: -122.4194 }, // Set the initial map center
//     zoom: 12 // Set the initial zoom level
//   });

//   // Add a marker to the map
//   var marker = new google.maps.Marker({
//     position: { lat: 37.7749, lng: -122.4194 }, // Set the marker position
//     map: map, // Set the map to add the marker to
//     title: 'Marker' // Set the marker title (optional)
//   });
// });

// Custom Init - Happens only once
sap.ui.getCore().attachInit(function(data) {
    setTimeout(function() {

        require([
            "esri/Map",
            "esri/views/MapView"
        ], function(Map, MapView) {

            var map = new Map({
                basemap: "topo-vector"
            });

            var view = new MapView({
                container: map.getDomRef(),
                map: map,
                center: [-118.71511, 24.09042], //longitude, latitude
                zoom: 11
            });
        }, 200);
    })
});