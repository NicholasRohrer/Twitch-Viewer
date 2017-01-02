$(document).ready();

//cache the DOM
var $streamer1 = $('#streamer1');

//$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
 //console.log(data);
//});

function getStreamerInfo() {

	$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/summit1g?callback=?', function(data) {
	  console.log(data);

	  if (data.stream != 'null') {
	  	console.log(data.stream['channel'].display_name);
	  	$streamer1.html(data.stream['channel'].display_name);
	  } 
	  	
	});
}

getStreamerInfo();