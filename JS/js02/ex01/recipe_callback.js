
function randomFail() {
	if (Math.random() < 0.2) throw "Production failed..!(The salary was cut ㅜㅜ)";
}

function	fry(timer) {
	try {
		randomFail()
		console.log('5 - Fry at 5 seconds has been success');
		console.log('Operations has finish');
	} catch (error) {
		console.log(error);
		fry(timer);
	}
}

function	secondFerm(timer) {
	try {
		randomFail()
		console.log('4 - Second fermentation at 2 seconds has been success');
		fry(5000)
	} catch (error) {
		console.log(error);
		secondFerm(timer);
	}
}

function	Molding(timer) {
	let	timeId = setTimeout(() => {
		try {
			randomFail()
			console.log('3 - Molding at 4.2 seconds has been succes');
			secondFerm(2000)
		} catch (error) {
			console.log(error);
			Molding(timer);
		}
	}, timer);
}

function	firstFerm(timer) {
	let	timeId = setTimeout(() => {
		try {
			randomFail()
			console.log('2 - Primary fermentation at 5 seconds has been succes');
			Molding(4200)
		} catch (error) {
			console.log(error);
			firstFerm(timer);
		}
	}, timer);
}

function	MakeDough(timer) {
	let timeId = setTimeout(() => {
		try {
			randomFail()
			console.log('1 - Make the dough at 3 seconds has been succes');
			firstFerm(5000);
		} catch (error) {
			console.log(error);
			MakeDough(timer)
		}
	}, timer);
}

MakeDough(3000)