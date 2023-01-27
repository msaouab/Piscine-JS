
const arr = []
let index = null;

function	deleteTask() {
	document.querySelector('#todo').value = "";

	let delete_task = document.querySelectorAll('#delete')
	for (let i = 0; i < delete_task.length; i++) {
		delete_task[i].onclick = function () {
			this.parentElement.remove();
		}
	}
}

function	finishTask() {
	const task = document.querySelectorAll('.list');
	task.forEach(list => {
		list.addEventListener('click', function handleClick(e) {
				const style = list.style[0] === undefined ? `color: red; text-decoration: line-through;` : ''
				list.setAttribute('style', style);
		})
	})
}

function	editTask() {
	let edit_task = document.querySelectorAll('#edit')
	for (let i = 0; i < edit_task.length; i++) {
		edit_task[i].onclick = function () {
			console.log(this.parentElement.firstElementChild.textContent);
			document.querySelector('#todo').value = this.parentElement.firstElementChild.textContent;
			index = i
		}
	}
}

function	addTask() {
	index === null ?  arr.unshift(document.querySelector('#todo').value) : arr[index] = document.querySelector('#todo').value
	document.querySelector('#toDoList').innerHTML  = ''
	arr.map((todo) => {
		document.querySelector('#toDoList').innerHTML += `
		<div>
			<li class="list">${todo}</li>
			<button id="edit"><i class="fa fa-edit"></i></button>
			<button id="delete"><i class="far fa-trash-alt"></i></button>
		</div>`
	})
}

document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();
	if (document.querySelector('#todo').value.length == 0)
		alert("please Enter a Task")
	else {
		addTask();
		index = null
		deleteTask();
		finishTask();
		editTask();
		console.log(arr);
	}
})
