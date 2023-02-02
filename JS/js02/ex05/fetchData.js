
export const fetchData = async (url, arr) => {
	let post;
	let comments;
	let x = 1;

	for (let i of arr) {
		await fetch(url + i)
		.then((response) => response.json())
		.then((json) => {
			post = json;
		});
		console.log('from fetch ==> number:', x, '=>', i);
		console.log('---');
		const {title: postTit, body: postBody} = post;
		console.log('Title:', postTit + '\n');
		console.log(postBody);
		console.log('---');
		
		await fetch(url + i + '/comments')
		.then((response) => response.json())
		.then((json) => {
			comments = json;
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
