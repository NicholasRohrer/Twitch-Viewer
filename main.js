$(document).ready();

//cache the DOM
//var $streamer1 = $('#streamer1');
//var $status1 = $('#status1');
//var $game1 = $('#game1');
//var $viewers1 = $('#viewers1');

// list of currently popular and interesting Twitch Streamers
var streamers = ['summit1g', 'freecodecamp'];

function getStreamerInfo() {

	for (let i = 0; i < streamers.length; i++) {

		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] + '?callback=?', function(data) {
		  console.log(data);
		  console.log(data.stream);

		  $('#streamer' + i).html(streamers[i]);

		  if (data.stream !== null) {
		  	//console.log(data.stream['channel'].display_name);
		  	//$streamer1.html(data.stream['channel'].display_name);
		  	//$status1.html('Online');
		  	//$game1.html(data.stream['game']);
		  	//$viewers1.html(data.stream['viewers']);

		  	$('#status' + i).html('Online');
		  	$('#game' + i).html(data.stream['game']);
		  	$('#viewers' + i).html('Viewers: ' + data.stream['viewers'])


		  } 

		  else if (data.stream === null) {

		  	//$status1.html('Offline');
		  	$('#status' + i).html('Offline');
		  }
		  	
		});
	}
}

getStreamerInfo();