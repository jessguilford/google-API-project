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

function addMapMarker(markerArray) {
  var yamhill = new Bar("Yamhill", 45.5175688, -122.6775161, "5-2:30am");
  var markerArray = [yamhill];
  console.log(markerArray);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5324167, lng: -122.655503},
    zoom: 13,
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
      title: this.name,
      map: map
    });
  }

  console.log("what's good?");
}

exports.addMapMarker = addMapMarker;

// exports.yamhillMarker = yamhillMarker;

},{"./../js/bar-crawl.js":1}],3:[function(require,module,exports){
// var yamhillMarker = require('./../js/map-interface.js').yamhillMarker;
var addMapMarker = require('./../js/map-interface.js').addMapMarker;

$(document).ready(function() {
  $("#yamhill-li").click(addMapMarker);
    //yamhillMarker.setMap(map);
});

var Bar = require('./../js/bar-crawl.js').Bar;

function addMapMarker(markerArray) {
  var yamhill = new Bar("Yamhill", 45.5175688, -122.6775161, "5-2:30am");
  var markerArray = [yamhill];
  console.log(markerArray);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5324167, lng: -122.655503},
    zoom: 13,
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
      title: this.name,
      map: map
    });
  }

  console.log("what's good?");
}

exports.addMapMarker = addMapMarker;

// exports.yamhillMarker = yamhillMarker;

},{"./../js/bar-crawl.js":1,"./../js/map-interface.js":2}]},{},[3]);
