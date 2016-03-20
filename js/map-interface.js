var Bar = require('./../js/bar-crawl.js').Bar;

exports.addMapMarkers = function(markerArray) {
  var crawlCoordinates = [];
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
    var thisLat = markerArray[i].latitude;
    var thisLong = markerArray[i].longitude;
    var thisName = markerArray[i].name;

    var marker = new google.maps.Marker({
      position: {lat: thisLat, lng: thisLong},
      title: thisName,
      map: map
    });
    marker.addListener("click", function() {
      infowindow = new google.maps.InfoWindow({
          content: this.title
        });
      infowindow.open(map,this);
    });
    crawlCoordinates.push(marker.getPosition());
  }
  console.log("rendered map markers");
  var crawlPath = new google.maps.Polyline({
    map: map,
    path: crawlCoordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
};

// exports.addMapMarkers = addMapMarkers;

// exports.yamhillMarker = yamhillMarker;
