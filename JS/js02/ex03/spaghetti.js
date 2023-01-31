
function randomFail() {
	return (Math.round(Math.random() * 10) > 2)
}

const	Spaghetti = (oper, time) => {
	return	new Promise((resolve) => {
		let intervalId = setInterval(() => {
			if (randomFail()) {
				console.log(oper);
				resolve(oper);
				clearInterval(intervalId);
			}
			else
				console.log('Production failed!...');
		}, time);
	})
}

// A. Boil noodles - 10 seconds
const doA = () => {
	return Spaghetti('A: Noodles have been boiled', 10000);
};

const doB = () => {
	return (Spaghetti('B1 - Broccoli has been replaced', 1000)
	.then(() => Spaghetti('B2 - Garlic and onion have been sautéed', 2000))
	.then(() => Spaghetti('B3 - Bacon and ham have been sautéed', 2000))
	.then(() => Spaghetti('B4 - sauce and remaining vegetables have been added', 3000)));
};

const doAB = () => {
	return Promise.all([doA(), doB()]);
};

doAB().then(() => {
	Spaghetti('C: noodels and stir-fry have been added', 3000);
})
