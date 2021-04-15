/*
	clock.js © Diicorp95. Licensed under MIT license.
*/

const update_interval = 500;

var thistime;
var formedstring;

let textvalue = document.getElementById('clock-value-here');

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
	textvalue.innerHTML = formedstring;
}
setInterval(()=>{
	clock_Update();
},update_interval);
