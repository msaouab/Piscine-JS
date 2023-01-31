// import { setTimer } from './setTimerTimeout.js';
import { setTimer } from './setTimerInterval.js';

function printNum(count) {
	console.log(count);
	return count < 5;
}

setTimer(printNum, 1000); // 0 1 2 3 <= Each output is 100ms apart.