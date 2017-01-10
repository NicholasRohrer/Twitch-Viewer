$(document).ready();

//cache the DOM

// list of currently popular and interesting Twitch Streamers
var streamers = ['summit1g', 'LIRIK', 'TimTheTatman', 'Doublelift', 'shroud', 'Ninja', 'CohhCarnage', 'jackfrags', 'freecodecamp', 'Arconyx', 'teamTALIMA'];

function getStreamerInfo() {

	for (let i = 0; i < streamers.length; i++) {

		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] + '?callback=?', function(data) {

			$('#streamer' + i).html(streamers[i]);
			$('#url' + i).attr("href", 'https://www.twitch.tv/' + streamers[i]);

			// if streamer is online
		  	if (data.stream !== null) {

				$('#status' + i).html('Online');
			  	$('#game' + i).html(data.stream['game']);
			  	$('#viewers' + i).html('Viewers: ' + data.stream['viewers'])
			  	//console.log(data.stream.preview);
			  	$('#img' + i).attr("src", data.stream.preview['medium']);
			  	

			  	// adds margin to top of game ID
			  	$('#game' + i).addClass("showInfo");

			 } 

			// if streamer is offline
		  	else if (data.stream === null) {

		  		$('#status' + i).html('Offline');

		  		// clears any top margin from game ID if streamer is offline
		  		$('#game' + i).addClass("hideInfo");
		  		$('#viewers' + i).addClass("hideInfo");
		  		$('#img' + i).addClass("hideInfo");

		  	}	
		});
	}
}

// populate streamer info when page loads
getStreamerInfo();