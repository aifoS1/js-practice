

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

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize(){

  directionsDisplay = new google.maps.DirectionsRenderer();

  var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(40.7033127,-73.979681)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directions-panel'));
  }


// var origin = "New York, NY",
// // var origin = new google.maps.LatLng(37.7831,-122.4039),
//     destination = "los angeles, ca",
//     service = new google.maps.DistanceMatrixService();

// service.getDistanceMatrix(
//     {
//         origins: [origin],
//         destinations: [destination],
//         travelMode: google.maps.TravelMode.DRIVING,
//         avoidHighways: false,
//         avoidTolls: false
//     }, 
//     callback
// );

// function callback(response, status) {
// 	console.log(response.rows[0].elements[0].duration.text)
//     var orig = document.getElementById("orig"),
//         dest = document.getElementById("dest"),
//         dist = document.getElementById("dist");

//     if(status=="OK") {
//         dest.value = response.destinationAddresses[0];
//         orig.value = response.originAddresses[0];
//        var duration = dist.value = response.rows[0].elements[0].duration.text;

//     } else {
//         alert("Error: " + status);
//     }

//     freeBirds(duration)
// }

// function freeBirds(duration){
//     console.log(duration)
//     var total = duration.split(" ");

//     switch (total.length) {
//     	case 4:
//     	  var unit = total[1];
//     	  var days = total[0];
//     	  var mins;
//     	  var hours;
//         minOrDay(total[3]) ? mins = total[3] :  hours = total[3]
    	  
//     	  console.log(mins, hours)
//     	  break;
// //value is in second value / 60 /60 = hours
//       case 2:

   

//     }

// }

// function minOrDay(val){
// 	return val == "mins" ? true : false;
// }

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;





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
 // }




         initialize();