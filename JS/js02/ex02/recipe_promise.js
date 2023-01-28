
function	succes() {
	return (Math.random() * 10 > 2);
}

const jaeskim = (job, time) => {
	let myPromise = new Promise(function(myResolve, myReject) {
		const intervalId = setInterval(() => {
			if (succes()) {
				myResolve(`${job} success`);
				clearInterval(intervalId)
			}
			else {
				console.log(`${job} failed in the process`)
			}
		}, time);
	})
	return myPromise;
}

jaeskim('MakingDough', 3000).then(myResolve => {
	console.log(myResolve);
	return jaeskim('Primary', 5000);
}).then(myResolve => {
	console.log(myResolve);
	return jaeskim('Molding', 4200);
}).then(myResolve => {
	console.log(myResolve);
	return jaeskim('Seconds', 2000);
}).then(myResolve => {
	console.log(myResolve)
	return jaeskim('Fry', 5000);
}).then(myResolve => {
	console.log(myResolve);
})