
export	function	setTimer(callback, interval) {
	let	count = 0;
	const	intervalId = setInterval(() => {
		if (!callback(count))
			clearInterval(intervalId);
		count++;
	}, interval)
}