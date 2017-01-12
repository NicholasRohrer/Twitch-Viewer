$(document).ready();

//cache the DOM
var $filterButton = $('#filterButton');

// list of currently popular and interesting Twitch Streamers
var streamers = ['summit1g', 'LIRIK', 'TimTheTatman', 'Doublelift', 'shroud', 'Ninja', 'CohhCarnage', 'jackfrags', 'freecodecamp', 'Arconyx', 'teamTALIMA'];

function getStreamerInfo() {

	for (let i = 0; i < streamers.length; i++) {

		// make API call for each streamer in array
		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] + '?callback=?', function(data) {

			$('#streamer' + i).html(streamers[i]);
			$('#url' + i).attr("href", 'https://www.twitch.tv/' + streamers[i]);

			// if streamer is online
		  	if (data.stream !== null) {

				$('#status' + i).html('Online');
			  	$('#game' + i).html(data.stream['game']);
			  	$('#viewers' + i).html('Viewers: ' + data.stream['viewers'])			
			  	$('#img' + i).attr("src", data.stream.preview['medium']);
			  	
			  	// adds margin to top of game ID
			  	$('#game' + i).addClass("showInfo");

			  	// adds online class to panel
			  	$('#panel' + i).addClass('online');
			 } 

			// if streamer is offline
		  	else if (data.stream === null) {

		  		$('#status' + i).html('Offline');

		  		// clears any top margin from game ID if streamer is offline
		  		$('#game' + i).addClass("hideInfo");
		  		$('#viewers' + i).addClass("hideInfo");
		  		$('#img' + i).addClass("hideInfo");

		  		// adds offline class to panel
			  	$('#panel' + i).addClass('offline');

		  	}	
		});
	}
}

// opens side navigation and pushes body off screen
function openNav() {
	document.getElementById("filterSideNav").style.width = '250px';
	document.body.style.marginLeft = '250px';
	document.body.style.marginRight = '-250px';
	document.body.style.overflow = 'hidden';
	
}

// closes side naviagtion and returns body to original position
function closeNav() {
	document.getElementById("filterSideNav").style.width = '0';
	document.body.style.marginLeft = '0';
	document.body.style.marginRight = '0';
	document.body.style.overflow = 'visible';
}

function filterOnline() {

	// iterate through streamer array and hide all offline streamers
	for (let x = 0; x < streamers.length; x++) {
		if ( $('#panel' + x).hasClass('online') ) {
			$('#panel' + x).toggleClass('showOnline');
		}
		else if ( $('#panel' + x).hasClass('offline') ) {
			$('#panel' + x).toggleClass('hideOffline');
		}
	}
}

function filterOnline() {

	// iterate through streamer array and hide all online streamers
	for (let y = 0; y < streamers.length; y++) {
		if ( $('#panel' + x).hasClass('online') ) {
			$('#panel' + x).toggleClass('showOnline');
		}
		else if ( $('#panel' + x).hasClass('offline') ) {
			$('#panel' + x).toggleClass('hideOffline');
		}
	}
}

// populate streamer info when page loads
getStreamerInfo();

// on click of filter button
$filterButton.on('click', openNav);