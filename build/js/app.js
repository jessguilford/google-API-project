(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Bar(name, latitude, longitude, hours) {
  this.name = name;
  this.latitude = latitude;
  this.longitude = longitude;
  this.hours = hours;
}

exports.Bar = Bar;

},{}],2:[function(require,module,exports){
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

},{"./../js/bar-crawl.js":1}],3:[function(require,module,exports){
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
  $(".selections").hide();
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
    $(".selections").slideDown();
    $(".selections").append('<li class="selected">' + markerID.name + '</li>');
    $(this).hide();
  });
  $(".submit-bars").click(function() {
    addMapMarkers(markerArray);
    console.log(addMapMarkers);
  });
  $(".clear-selections").click(function() {
    removeAllMarkers();
    addMapMarkers(markerArray);
    $(".bar-item").removeClass("is-selected");
    $(".bar-item").show();
    $(".selected").hide();
    $(".selections").slideUp();
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

},{"./../js/bar-crawl.js":1,"./../js/map-interface.js":2}]},{},[3]);
