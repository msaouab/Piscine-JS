
export function	setTimer(callback, interval) {
	let count = 0;
	const timeoutId = setTimeout(function run() {
		if (!callback(count))
			clearTimeout(timeoutId);
		else {
			count++;
			setTimeout(run, interval)
		}
	}, interval)
}
