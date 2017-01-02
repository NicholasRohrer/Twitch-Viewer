$(document).ready();

//cache the DOM
var $streamer1 = $('#streamer1');
var $status1 = $('#status1');
var $game1 = $('#game1');
var $viewers1 = $('#viewers1');

//$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
 //console.log(data);
//});

function getStreamerInfo() {

	$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/summit1g?callback=?', function(data) {
	  console.log(data);

	  if (data.stream != 'null') {
	  	console.log(data.stream['channel'].display_name);
	  	$streamer1.html(data.stream['channel'].display_name);
	  	$status1.html('Online');
	  	$game1.html(data.stream['game']);
	  	$viewers1.html(data.stream['viewers']);
	  } 

	  else if (data.stream == 'null') {
	  	$status1.html('Offline');
	  }
	  	
	});
}

getStreamerInfo();