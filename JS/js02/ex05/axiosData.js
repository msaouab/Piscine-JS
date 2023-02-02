import axios from "axios";

export const axiosData = async (url, arr) => {
	let post;
	let comments;
	let x = 1;

	for (let i of arr) {
		await axios.get(url + i)
		.then(function (reponse) {
			post = reponse.data;
		});
		console.log('from axios ==> number:', x, '=>', i);
		console.log('---');
		const {title: postTit, body: postBody} = post;
		console.log('Title:', postTit + '\n');
		console.log(postBody);
		console.log('---');
		
		await axios.get(url + i + '/comments')
		.then(function(reponse) {
			comments = reponse.data;
		})
		comments.forEach(element => {
			const { name: commentby, email: emailby, body: commentBody } = element;
			console.log('Commented by:', commentby);
			console.log('Email:', emailby + '\n');
			console.log(commentBody);
			console.log('---');
		});
		x++;
	}
}