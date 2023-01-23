
function	getTime() {
	const date = new Date();
	const isDay = date.getHours() < 12;
	const hours = isDay ? date.getHours() : date.getHours() - 12;
	const min = date.getMinutes();
	const sec = date.getSeconds();
	return (hours + ':' + min + ':' + sec + ' p.m.');
}

function getSize()
{
    var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0];
    var x=w.innerWidth||e.clientWidth||g.clientWidth;
    var y=w.innerHeight||e.clientHeight||g.clientHeight;
    return {width:x, height:y}
}

const time = document.getElementsByTagName('time')[0];
const ul = time.nextElementSibling;
const size = getSize();
const screen = document.createElement('li');
const windowOfouter = document.createElement('li');
const windowOfinner = document.createElement('li');
const documentOfset = document.createElement('li');


ul.appendChild(screen);
ul.appendChild(windowOfouter);
ul.appendChild(windowOfinner);
ul.appendChild(documentOfset);

time.innerHTML = getTime();
screen.innerHTML = `Screen: ${window.screen.width} * ${window.screen.height}`
windowOfouter.innerHTML = `Window Outer: ${window.outerWidth} * ${window.outerHeight}`
windowOfinner.innerHTML = `Window Inner: ${window.innerWidth} * ${window.innerHeight}`
documentOfset.innerHTML = `Document: ${size.width} * ${size.height}`

window.addEventListener ('resize', () => {
	time.innerHTML = getTime();
	screen.innerHTML = `Screen: ${window.screen.width} * ${window.screen.height}`
	windowOfouter.innerHTML = `Window Outer: ${window.outerWidth} * ${window.outerHeight}`
	windowOfinner.innerHTML = `Window Inner: ${window.innerWidth} * ${window.innerHeight}`
	documentOfset.innerHTML = `Document: ${size.width} * ${size.height}`
})
