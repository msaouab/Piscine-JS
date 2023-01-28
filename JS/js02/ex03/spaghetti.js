
function	success() {
	return (Math.random() * 10 < 2);
}

const boilNoodles = () => {
	return new Promise((resolve, reject) => {
		// console.log('Boiling noodles...');
		if (success())
			console.log('Boiling noodles failed');
		else {
			setTimeout(() => {
				console.log("A: Noodles have been boiled");
				resolve();
			}, 1000);
		}
	})
}

const replaceBroccoli = () => {
	return new Promise((resolve, reject) => {
		// console.log('replacing broccoli...');
		if (success())
			console.log('failed to replacing Broccoli');
		else {
			setTimeout(() => {
				console.log('B1 - Broccoli has been replaced');
				resolve();
			}, 2000);
		}
	})
}

const sauteGarlicOnion = () => {
	return new Promise((resolve, reject) => {
		// console.log('Sautéing garlic and onion...');
		if (success())
			console.log('failed to saute garlic and onion');
		else {
			setTimeout(() => {
				console.log('B2 - Garlic and onion have been sautéed');
				resolve();
			}, 2000);
		}
	})
}

const sauteBaconHam = () => {
	return new Promise((resolve, reject) => {
		// console.log('Sautéing bacon and ham...');
		if (success())
			console.log('failed to saute bacon and ham');
		else {
			setTimeout(() => {
				console.log('B3 - Bacon and ham have been sautéed');
				resolve();
			}, 2000);
		}
	})
}

const addSauceVeggies = () => {
	return new Promise((resolve, reject) => {
		// console.log('Adding sauce and remaining vegetables...');
		if (success())
			console.log('failed to add sauce and remaining vegetables');
		else {
			setTimeout(() => {
				console.log('B4 - sauce and remaining vegetables have been added');
				resolve();
			}, 3000);
		}
	})
}

const addNoodles = () => {
	return new Promise((resolve, reject) => {
		// console.log('Adding noodels and stir-fry...');
		if (success())
			console.log('failed to add noodels and stir-fry');
		else {
			setTimeout(() => {
				console.log('C: noodels and stir-fry have been added');
				resolve();
			}, 3000);
		}
	})
}

Promise.all([boilNoodles(), replaceBroccoli(), sauteGarlicOnion(), sauteBaconHam(), addSauceVeggies(), addNoodles()]).then((values) => {
	console.log(values);
})