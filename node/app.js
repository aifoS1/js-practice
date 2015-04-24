

// function printMessage(username, badgeCount, points){
// 	var msg = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";

// 	console.log(msg);
// }

// var http = require("http");
// var username = 

// var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
//       console.log(response);
// });


var apiKey = 'AIzaSyCcslhuxtpvtnuybGc_VicaRBS1U0I41FU';
var baseURL = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';

var map;

function initialize(){


var origin = new google.maps.LatLng(37.7831,-122.4039),
    destination = "New York, NY",
    service = new google.maps.DistanceMatrixService();

service.getDistanceMatrix(
    {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        avoidHighways: false,
        avoidTolls: false
    }, 
    callback
);

function callback(response, status) {
	console.log(response)
    var orig = document.getElementById("orig"),
        dest = document.getElementById("dest"),
        dist = document.getElementById("dist");

    if(status=="OK") {
        dest.value = response.destinationAddresses[0];
        orig.value = response.originAddresses[0];
        dist.value = response.rows[0].elements[0].duration.text;

    } else {
        alert("Error: " + status);
    }
}

function freeBirds(duration){

}






// var mapOptions = {
//     center: new google.maps.LatLng(37.7831,-122.4039),
//     zoom: 12,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
// };

// new google.maps.Map(document.getElementById('map'), mapOptions);
// 	// $.ajax({
	// 	method:'get',
	// 	 url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&mode=bicycling&language=fr-FR&key=AIzaSyCcslhuxtpvtnuybGc_VicaRBS1U0I41FU',
	// 	 dataType: 'json',
	// 	 success: function(data){ console.log(data) }
	// })
// 	var mapOptions = {
// 		zoom: 6,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	};

// 	map = new google.maps.Map(document.getElementById("map"), mapOptions);


// 	if(navigator.geolocation){
// 		 navigator.geolocation.getCurrentPosition(function(position){
// 		 	var pos = new google.maps.LatLng(position.coords.latitude, 
// 		 		                                position.coords.longitude);

// 		 	var infowindow = new google.maps.InforWindow({
// 		 		map: map,
// 		 		position: pos,
// 		 		content: "Your location."
// 		 	});

// 		 	map.setCenter(pos);

// 	}
// );


// var service = new google.maps.DistanceMatrixService();
//   service.getDistanceMatrix(
//     {
//       origins: 'New+York+NY',
//       destinations: "New+Paltz+NY",
//       travelMode: "DRIVING",
//       unitSystem: google.maps.UnitSystem.IMPERIAL,
//       avoidHighways: false,
//       avoidTolls: false
//     }, callback);
// }

// function callback(response, status) {
//   if (status != google.maps.DistanceMatrixStatus.OK) {
//     alert('Error was: ' + status);
//   } else {

//   	 console.log(response)
//     // var origins = response.originAddresses;
//     // var destinations = response.destinationAddresses;
//     // var results = response.rows[0].elements[0];
//     // console.log("cat")
//     // var outputDiv = $('#outputDiv')[0];
//     // outputDiv.innerHTML = '';
//     // outputDiv.innerHTML = origins + ' to ' + destinations + ': ' + results.distance.text + ' in ' + results.duration.text + '<br>';
//     // $.post('/patients/'+$('body').data("current-patient")+'/eta', {eta: results.duration.text} );
//   }
 }




         initialize();