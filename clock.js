/*
	clock.js © Diicorp95. Licensed under MIT license.
*/

const update_interval = 800;

var thistime;
var formedstring;

var maindiv = document.createElement('div');

function clock_Update() {
	thistime = new Date(); // Date object
	var hours = thistime.getHours();
	var minutes = thistime.getMinutes();
	var seconds = thistime.getSeconds();
	if (hours < 10) {
		formedstring = '0'+hours+':'; // add zero before
	} else {
		formedstring = hours+':';
	}
	if (minutes < 10) {
		formedstring += '0'+minutes+':'; // add zero before
	} else {
		formedstring += minutes+':';
	}
	if (seconds < 10) {
		formedstring += '0'+seconds; // add zero before
	} else {
		formedstring += seconds;
	}
	document.getElementById('clock-value-here').innerHTML = formedstring;
}

function clock_Init() {
	maindiv.id = 'clock-time';
	maindiv.innerHTML = '<div class="clock-time-blocks"><img src="clock_js.gif" class="clock-time-block"><span id="clock-value-here" class="clock-time-block">00:00:00</span></div></div>';
	document.body.appendChild(maindiv);
}

// main:
clock_Init();
setInterval(()=>{
	clock_Update();
},update_interval);
