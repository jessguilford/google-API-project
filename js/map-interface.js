var Bar = require('./../js/bar-crawl.js').Bar;
// var markerArray = require('./../js/browser-interface.js').markerArray;

// function addToArray(bar) {
//   markerArray.push(bar);
//   return markerArray;
// }

exports.addMapMarkers = function(markerArray) {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.516326, lng: -122.655503},
    zoom: 12,
    styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'off' }]  // Turn off points of interest.
    }, {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
    }],
    disableDoubleClickZoom: true
  });

  for(var i = 0; i < markerArray.length; i++) {
    console.log("getting markerArray");
    var thisLat = markerArray[i].latitude;
    var thisLong = markerArray[i].longitude;
    console.log(thisLat);
    var marker = new google.maps.Marker({
      position: {lat: thisLat, lng: thisLong},
      title: "Bar",
      map: map
    });
  }

  console.log("rendered map markers");
};

// exports.addMapMarkers = addMapMarkers;

// exports.yamhillMarker = yamhillMarker;
