$(document).ready();

$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
});

$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/summit1g?callback=?', function(data) {
  console.log(data);
});