/*
	clock.js © Diicorp95. Licensed under MIT license.
*/

const update_interval = 500;

var thistime;
var formedstring;

var maindiv = document.createElement('div');

function clock_Update() {
	thistime = new Date(); // Date object
	if (thistime.getHours() < 10) {
		formedstring = '0'+thistime.getHours()+':'; // add zero before
	} else {
		formedstring = thistime.getHours()+':';
	}
	if (thistime.getMinutes() < 10) {
		formedstring += '0'+thistime.getMinutes()+':'; // add zero before
	} else {
		formedstring += thistime.getMinutes()+':';
	}
	if (thistime.getSeconds() < 10) {
		formedstring += '0'+thistime.getSeconds(); // add zero before
	} else {
		formedstring += thistime.getSeconds();
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
