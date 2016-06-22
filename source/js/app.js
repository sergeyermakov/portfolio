(function() {
	'use strict';

	$(document).ready(function() {
		$('.nav-icon').click(function() {
			$(this).toggleClass('open');
			$('.main-menu').toggleClass('open');
		});
	});


})();

var styleArray = [{
	"featureType": "all",
	"elementType": "all",
	"stylers": [{
		"saturation": "1"
	}, {
		"visibility": "on"
	}]
}, {
	"featureType": "administrative",
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#444444"
	}]
}, {
	"featureType": "landscape",
	"elementType": "all",
	"stylers": [{
		"color": "#f2f2f2"
	}]
}, {
	"featureType": "poi",
	"elementType": "all",
	"stylers": [{
		"visibility": "off"
	}]
}, {
	"featureType": "road",
	"elementType": "all",
	"stylers": [{
		"saturation": -100
	}, {
		"lightness": 45
	}]
}, {
	"featureType": "road.highway",
	"elementType": "all",
	"stylers": [{
		"visibility": "simplified"
	}]
}, {
	"featureType": "road.arterial",
	"elementType": "labels.icon",
	"stylers": [{
		"visibility": "off"
	}]
}, {
	"featureType": "transit",
	"elementType": "all",
	"stylers": [{
		"visibility": "off"
	}]
}, {
	"featureType": "water",
	"elementType": "all",
	"stylers": [{
		"color": "#61dac9"
	}, {
		"visibility": "on"
	}]
}];

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: -34.397, lng: 150.644 },
			scrollwheel: false,
			// Apply the map style array to the map.
			styles: styleArray,
			scrollwheel: false,
			zoom: 8
		})
	};