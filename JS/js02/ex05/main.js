
// function randomFail() {
// 	return (Math.round(Math.random() * 10) > 2)

const { default: axios } = require("axios");

// }
let url = "https://jsonplaceholder.typicode.com/posts/";

// const fetchData = async (number) => {

// 	let post;
// 	let comments;
// 	await fetch(url + number)
// 		.then((response) => response.json())
// 		.then((json) => {
// 			// console.log(json);
// 			post = json
// 		});
// 	const { title: postTitle, body: postBody } = post;
// 	console.log("Title:", postTitle + "\n");
// 	console.log(postBody);
// 	console.log("---");
// 	await fetch(url + number + "/comments")
// 		.then((response) => response.json())
// 		.then((json) => {
// 			// console.log(json);
// 			comments = json
// 		});
// 	comments.forEach(element => {
// 		const {name: commentedBy, email, body: bodyComment} = element;
// 		console.log("Commented By:", commentedBy)
// 		console.log("Email:", email)
// 		console.log(bodyComment);
// 		console.log("---");
// 	});
// }

const	fetchData = (number) => {
	let post;
	const axios = require('axios');

	axios.get(url, number).then(resp => {})
	const { title: postTitle, body: postBody } = post;
}


fetchData(1);
// const axios = require('axios');

// axios.get('http://webcode.me').then(resp => {

//     console.log(resp.data);
// });
