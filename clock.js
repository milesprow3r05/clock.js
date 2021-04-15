/*
	clock.js © Diicorp95. Licensed under MIT license.
*/

const update_interval = 800;

var thistime;
var formedstring;

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

function clock_Stop() {
	clearTimeout(clock_Timer);
}

function clock_Start() {
	clock_Timer = setInterval(()=>{
		clock_Update();
	},update_interval);
}

// main:
clock_Init_Check();
clock_Start();
