$(document).ready();

//cache the DOM
var $streamer1 = $('#streamer1');
var $status1 = $('#status1');

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
	  } 

	  else if (data.stream == 'null') {
	  	$status1.html('Offline');
	  }
	  	
	});
}

getStreamerInfo();