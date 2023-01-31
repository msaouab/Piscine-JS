
function randomFail() {
	return ((Math.random() * 10) < 2)
}

const Operations = (oper, timer) => {
	return new Promise((resolve) => {
		let intervalId = setInterval(() => {
			if (randomFail())
				console.log('Production failed..!(The salary was cut ㅜㅜ)');
			else {
				resolve(oper);
				clearInterval(intervalId);
			}
		}, timer);
	})
}

Operations('1 - Make the dough has been succes', 1000).then(resolve =>  {
	console.log(resolve);
	return Operations('2 - Primary fermentation has been succes', 5000);
}).then(resolve => {
	console.log(resolve);
	return Operations('3 - Molding has been succes', 4200);
}).then(resolve => {
	console.log(resolve);
	return Operations('4 - Second fermentation has been success', 2000);
}).then(resolve => {
	console.log(resolve);
	return Operations('5 - Fry has been success', 5000);
}).then(resolve => {
	console.log(resolve);
});
