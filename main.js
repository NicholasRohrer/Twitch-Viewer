$(document).ready();

//cache the DOM
var $filterButton = $('#filterButton');
var $panel0 = $('#panel0');
var $panel1 = $('#panel1');
var $panel2 = $('#panel2');
var $panel3 = $('#panel3');
var $panel4 = $('#panel4');
var $panel5 = $('#panel5');
var $panel6 = $('#panel6');
var $panel7 = $('#panel7');
var $panel8 = $('#panel8');
var $panel9 = $('#panel9');
var $panel10 = $('#panel10');

// array of panels
var panels = [$panel0, $panel1, $panel2, $panel3, $panel4, $panel5, $panel6, $panel7, $panel8, $panel9, $panel10];

// list of currently popular and interesting Twitch Streamers
var streamers = ['summit1g', 'LIRIK', 'TimTheTatman', 'Doublelift', 'shroud', 'Ninja', 'CohhCarnage', 'jackfrags', 'freecodecamp', 'Arconyx', 'teamTALIMA'];

// makes Twitch API call and fills in streamer html information
function getStreamerInfo() {

	for (let i = 0; i < streamers.length; i++) {

		// make API call for each streamer in array
		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] + '?callback=?', function(data) {

			// streamer name and url to twitch page
			$('#streamer'+ i).html(streamers[i]);
			$('#url' + i).attr("href", 'https://www.twitch.tv/' + streamers[i]);

			// if streamer is online
		  	if (data.stream !== null) {

		  		// fill in streamer information
				$('#status' + i).html('Online');
			  	$('#game' + i).html(data.stream['game']);
			  	$('#viewers' + i).html('Viewers: ' + data.stream['viewers'])			
			  	$('#img' + i).attr("src", data.stream.preview['medium']);
			  	
			  	// adds margin to top of game ID
			  	$('#game' + i).addClass("showInfo");

			  	// adds online class to panel
			  	panels[i].addClass('online');
			 } 

			// if streamer is offline
		  	else if (data.stream === null) {

		  		// fill in streamer information
		  		$('#status' + i).html('Offline');

		  		// clears any top or bottom margin from game ID if streamer is offline
		  		$('#div' + i).addClass('hideInfo');

		  		// adds offline class to panel
			  	panels[i].addClass('offline');

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

// hides all offline streamers, shows only online streamers
function filterOnline() {

	// reset filtering
	filterAll();

	// iterate through streamer array and hide all offline streamers
	for (let x = 0; x < streamers.length; x++) {
		if ( panels[x].hasClass('offline') ) {
			panels[x].addClass('hideOffline');
		}
	}
}

// hides all online streamers, shows only offline streamers
function filterOffline() {

	// resets filtering
	filterAll();

	// iterate through streamer array and hide all online streamers
	for (let y = 0; y < streamers.length; y++) {
		if ( panels[y].hasClass('online') ) {
			panels[y].addClass('hideOnline');
		}
	}
}

// resets all filtering and shows all streamers
function filterAll() {

	// iterate through streamer array and show all streamers
	for (let z = 0; z < streamers.length; z++) {
		if ( $('#panel' + z).hasClass('hideOnline') ) {
			$('#panel' + z).removeClass('hideOnline');
		}
		else if ( $('#panel' + z).hasClass('hideOffline') ) {
			$('#panel' + z).removeClass('hideOffline');
		}
	}
}

// filters streamers by name
function searchName() {
	var input, filter, name;
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase();

	for (let a = 0; a < panels.length; a++) {
		name = $('#streamer' + a).html();
		name = name.toUpperCase();
		
		// if user input string matches any part of streamer name, keep showing panel
		if (name.indexOf(filter) > -1) {
			panels[a].removeClass("hideThis");
		}

		// if no match is found anywhere in streamer name, hide panel
		else {
			panels[a].addClass("hideThis");
		}
	}
}


// populate streamer info when page loads
getStreamerInfo();

// on click of filter button
$filterButton.on('click', openNav);