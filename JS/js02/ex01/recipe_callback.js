
function	randomFail() {
	if (Math.random() < 0.2)
		throw "Production failed..!(The salary was cut ㅜㅜ)";
}

const MakingDough = () => {
	setTimeout( () => {
		try {
			randomFail();
			console.log ('Make the dough - 3 seconds')
			Primary();
		}
		catch (error) {
			console.log(error);
			MakingDough();
		}
	}, 3000);
}

const Primary = () => {
	setTimeout(() => {
		try {
			randomFail();
			console.log('Primary fermentation - 5 seconds')
			Molding();
		} catch (error) {
			console.log(error);
			Primary();
		}
	}, 5000);
}

const Molding = () => {
	setTimeout(() => {
		try {
			randomFail();
			console.log('Molding - 4.2 seconds');
			Seconds();
		} catch (error) {
			console.log(error);
			Molding();
		}
	}, 4200);
}

const Seconds = () => {
	setTimeout(() => {
		try {
			randomFail();
			console.log('Seconds fermentation - 5 seconds');
			Fry();
		} catch (error) {
			console.log(error);
			Seconds();
		}
	}, 2000);
}

const Fry = () => {
	setTimeout(() => {
		try {
			randomFail();
			console.log('Fry - 5 seconds');
		} catch (error) {
			console.log(error);
			Fry();
		}
	}, 5000);
}

MakingDough();
