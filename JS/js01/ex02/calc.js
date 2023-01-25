
function	getTime() {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const isDay = date.getHours() < 12;
	const hours = isDay ? date.getHours() : date.getHours() - 12;
	const min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	const sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	return (year + '.' + month + '.' + day + '. ' +  hours + ':' + min + ':' + sec + ' p.m.');
}

const time = document.getElementsByTagName('time')[0];
time.innerHTML = getTime();

const checkbox = document.getElementById('member');
const level = document.getElementById('level');
const textLevel = document.getElementById('textLevel');
const input = document.querySelector('#Pname');
const log = document.getElementById('product');
let num = document.getElementById('cost')
let calc = document.getElementById('discount')

if (!checkbox.checked) {
	textLevel.style.display = 'none';
	level.style.display = 'none';
}

checkbox.addEventListener('click', function handelClick () {
	if (checkbox.checked) {
		level.style.display = 'inline-block';
		textLevel.style.display = 'inline-block';
	}
	else {
		textLevel.style.display = 'none';
		level.style.display = 'none';
		calc.textContent = ''
	}
});

let amount;

function getAmount (e) {
	if (e.value >= 0) {
		num.textContent = e.value;
		amount = parseInt(e.value)
	}
}
function getSelectValue(event) {
	if (!isNaN(amount))
		calc.textContent = amount - (event.value / 100 * amount)
}
function getValue(val) {
	log.textContent = val.target.value;
}

input.addEventListener('input', getValue);