
export function setTimer(callback, timer) {
	let count = 0;

	let interval = setInterval(function go() {
		if (callback(count))
			count++
		else
			clearInterval(interval)
	}, timer);
}