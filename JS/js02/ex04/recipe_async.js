
function randomFail() {
	return (Math.round(Math.random() * 10) > 2)
}

const Operations = (oper, timer) => {
	return new Promise((resolve) => {
		let intervalId = setInterval(() => {
			if (!randomFail())
				console.log('Production failed..!');
			else {
				resolve(oper);
				clearInterval(intervalId);
			}
		}, timer);
	})
}

async function	MakePretzel(oper, time) {
	let data = await Operations(oper, time);
	return data;
}

MakePretzel('1 - Make the dough has been succes', 3000).then(data => console.log(data));
MakePretzel('2 - Primary fermentation has been succes', 5000).then(data => console.log(data));
MakePretzel('3 - Molding has been succes', 4200).then(data => console.log(data));
MakePretzel('4 - Second fermentation has been success', 2000).then(data => console.log(data));
MakePretzel('5 - Fry has been success', 5000).then(data => console.log(data));
