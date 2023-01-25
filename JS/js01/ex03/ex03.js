
// const item = document.querySelector('section')

// for (let x in item)
// 	console.log(item);

let item = document.querySelectorAll('li');

// for (let x in item)
item.forEach(function(item) {
	item.addEventListener('click', function () {
		alert(item.textContent);
		console.log(item);
	})
	item.addEventListener('mouseenter', function () {
		item.style.color = 'blue'
	})
	item.addEventListener('mouseleave', function () {
		item.style.color = 'black'
	});
});