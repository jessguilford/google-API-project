var addMapMarkers = require('./../js/map-interface.js').addMapMarkers;
var Bar = require('./../js/bar-crawl.js').Bar;
var yamhill = new Bar("Yamhill", 45.5175688, -122.6775161, "5-2:30am");
var triple = new Bar("Triple Nickel", 45.5175688, -122.6261492, "5-2:30am");
var mfp = new Bar("My Father's Place", 45.5188379, -122.6609757, "5-2:30am");
var spaceroom = new Bar("Space Room", 45.5118617, -122.615097, "5-2:30am");
var binks = new Bar("Binks", 45.5591568, -122.6396719, "12-2:30am");
var paddys = new Bar("Paddys", 45.5171232, -122.6756239, "3-2:30am");
var kellysOlympian = new Bar("Kelly's Olympian", 45.5198923, -122.6787462, "2-2:30am");
var rialto = new Bar("Rialto", 45.5194304, -122.6784697, "5-2:30am");
var sideStreet = new Bar("Side Street", 45.5167138, -122.6316498, "3-2:30am");
var sweetHereafter = new Bar("Sweet Hereafter", 45.5163145, -122.6325297, "4-2:30am");
var belmontInn = new Bar("The Belmont Inn", 45.5164566, -122.6271368, "3-2:30am");


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
