(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

//Markers
// var yamhillMarker = new google.maps.Marker({
//   position: {lat: 45.5175688, lng: -122.6775161},
//   title: "Yamhill Pub"
// });

function addMapMarker() {
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
  new google.maps.Marker({
    position: {lat: 45.5175688, lng: -122.6775161},
    title: "Yamhill Pub",
    map: map
  });
  console.log("what's good?");
}

exports.addMapMarker = addMapMarker;

// exports.yamhillMarker = yamhillMarker;

},{}],2:[function(require,module,exports){
// var yamhillMarker = require('./../js/map-interface.js').yamhillMarker;
var addMapMarker = require('./../js/map-interface.js').addMapMarker;

$(document).ready(function() {
  $("#yamhill-li").click(addMapMarker);
    //yamhillMarker.setMap(map);
});


//Markers
// var yamhillMarker = new google.maps.Marker({
//   position: {lat: 45.5175688, lng: -122.6775161},
//   title: "Yamhill Pub"
// });

function addMapMarker() {
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
  new google.maps.Marker({
    position: {lat: 45.5175688, lng: -122.6775161},
    title: "Yamhill Pub",
    map: map
  });
  console.log("what's good?");
}

exports.addMapMarker = addMapMarker;

// exports.yamhillMarker = yamhillMarker;

},{"./../js/map-interface.js":1}]},{},[2]);
