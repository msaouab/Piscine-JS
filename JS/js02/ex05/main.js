
import { axiosData } from './axiosData.js';
import { fetchData } from './fetchData.js';

let url = "https://jsonplaceholder.typicode.com/posts/";

function	randomfail() {
	const arr = [];
	for (let i = 0; i < 5; i++)
		arr[i] = Math.floor((Math.random() * 100) + 1);
	return arr;
}

const n = randomfail();

await fetchData(url, n);
axiosData(url, n);