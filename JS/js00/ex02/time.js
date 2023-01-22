const month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
	];
let day = 13;

const timeWarp = (newMonth, newDay) => {
	console.log(day + "th " + month[newMonth]);
	// month[0] = month[newMonth];
	// day = newDay;
}

timeWarp(5, 10);
timeWarp(11, 20);