/*jslint browser: true*/
/*global L */

(function (window, document, L, undefined) {
	'use strict';

	// TIS: 46.4838, 11.336
	/* create leaflet map */
	var map = L.map('map', {
		center: [46.4838, 11.336], // y, x
		zoom: 16
	});


  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
      },
    "geometry": {
        "type": "Point",
        "coordinates": [46.4838, 11.336]
      }
  };


	/* add default stamen tile layer */
	L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
		minZoom: 0,
		maxZoom: 18,
		attribution: 'Map data © <a href="http://www.openstreetmap.org">OpenStreetMap contributors</a>'
	}).addTo(map);
  L.marker([46.4838, 11.336]).addTo(map).bindPopup("I am a green leaf.");

}(window, document, L));









/*



function hideMsg() {
	console.log("hide msg")
	$(".top-msg").velocity({
		translateY: -10em;
		opacity: 0,
	});
}

*/

/*
function hideMsg() {
	console.log("hide msg")
	$(".ui").velocity({
		scaleX: 1,
		scaleY: 1,
		opacity: 1,
	});
	$(".map-application").velocity({
		opacity: 0.5,
	});
	$(".menu-btn").velocity({
		colorRed: 255,
		colorBlue: 255,
		colorGreen: 255,
	}, {
		complete: function () {
			$(".header-bar").removeClass("hidden").addClass("visible");
		}
	});
}
*/
