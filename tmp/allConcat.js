var addMapMarkers = require('./../js/map-interface.js').addMapMarkers;
var Bar = require('./../js/bar-crawl.js').Bar;
var yamhill = new Bar("Yamhill", 45.5175688, -122.6775161, "5-2:30am");
var triple = new Bar("Triple Nickel", 45.5175688, -122.6261492, "5-2:30am");
var mfp = new Bar("My Father's Place", 45.5188379, -122.6609757, "5-2:30am");
var spaceroom = new Bar("Space Room", 45.5118617, -122.615097, "5-2:30am");
var binks = new Bar("Binks", 45.5591568, -122.6396719, "12-2:30am");

$(document).ready(function() {
  var markerArray = [];
  var addMarker = function(bar) {
    markerArray.push(bar);
  };
  var removeAllMarkers = function() {
    markerArray.splice(0, markerArray.length);
  };
  $(".bar-item").click(function(){
    var markerID = eval(this.id);
    addMarker(markerID);
    $(this).addClass("is-selected");
  });
  $(".submit-bars").click(function() {
    addMapMarkers(markerArray);
    console.log(addMapMarkers);
  });
  $(".clear-selections").click(function() {
    removeAllMarkers();
    addMapMarkers(markerArray);
    $(".bar-item").removeClass("is-selected");
  });
});

// exports.markerArray = markerArray;



// $(document).ready(function() {
//   markerArray = [];
//   $("#yamhill").click(addToArray("hi there"));
//
//   $(".submit-bars").click(addMapMarkers);
// });










/*
var rubeGoldberg = function(someKindOfInput){
  //do stuff with your input, and then return some kind of output.
  someKindOfInput = 4;
  return someKindOfInput;
}

var bucket = rubeGoldberg("thing");
*/

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
