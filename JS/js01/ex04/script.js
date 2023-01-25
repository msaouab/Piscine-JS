
let oldScroll = window.scrollY;

window.onscroll = function (event) {
	let newScroll = window.scrollY;
	if (oldScroll < newScroll)
	console.log("Up");
	if (oldScroll > newScroll)
		console.log("Down");
}