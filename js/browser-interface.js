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
  $(".bar-item").click(function(){
    var markerID = eval(this.id);
    console.log(markerID);
    addMarker(markerID);
  });
  $(".submit-bars").click(function() {
    addMapMarkers(markerArray);
    console.log(addMapMarkers);
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
