$(document).ready();

//cache the DOM

// list of currently popular and interesting Twitch Streamers
var streamers = ['summit1g', 'LIRIK', 'TimTheTatman', 'Doublelift', 'shroud', 'Ninja', 'CohhCarnage', 'jackfrags', 'freecodecamp', 'Arconyx', 'teamTALIMA'];

function getStreamerInfo() {

	for (let i = 0; i < streamers.length; i++) {

		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] + '?callback=?', function(data) {
		  //console.log(data);
		  //console.log(data.stream.preview);

			$('#streamer' + i).html(streamers[i]);

		  	if (data.stream !== null) {

				$('#status' + i).html('Online');
			  	$('#game' + i).html(data.stream['game']);
			  	$('#viewers' + i).html('Viewers: ' + data.stream['viewers'])
			  	//console.log(data.stream.preview);
			  	$('#img' + i).attr("src", data.stream.preview['medium']);

			  	// adds margin to top of game ID
			  	$('#game' + i).addClass("showInfo");

			 } 

		  	else if (data.stream === null) {

		  		$('#status' + i).html('Offline');

		  		// clears any top margin from game ID if streamer is offline
		  		$('#game' + i).addClass("hideInfo");
		  		$('#viewers' + i).addClass("hideInfo");

		  	}	
		});
	}
}

getStreamerInfo();