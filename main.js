$(document).ready();

//cache the DOM

// list of currently popular and interesting Twitch Streamers
var streamers = ['summit1g', 'TimTheTatman', 'freecodecamp', 'Doublelift', 'shroud'];

function getStreamerInfo() {

	for (let i = 0; i < streamers.length; i++) {

		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] + '?callback=?', function(data) {
		  console.log(data);
		  console.log(data.stream);

			$('#streamer' + i).html(streamers[i]);

		  	if (data.stream !== null) {

				$('#status' + i).html('Online');
			  	$('#game' + i).html(data.stream['game']);
			  	$('#viewers' + i).html('Viewers: ' + data.stream['viewers'])

			 } 

		  	else if (data.stream === null) {

		  		$('#status' + i).html('Offline');

		  	}	
		});
	}
}

getStreamerInfo();