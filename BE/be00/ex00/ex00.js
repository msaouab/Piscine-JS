import { createServer } from 'http';

const server = createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello Node.js!');
});

server.listen(4242, () => {
	console.log('Server is running at http://localhost:4242/');
});