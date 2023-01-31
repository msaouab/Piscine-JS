
export function	setTimer(callback, timer) {
	let count = 0;

	let timeId = setTimeout(function go() {
		if (callback(count)) {
			setTimeout(go, timer)
			count++;
		}
	}, timer);
}