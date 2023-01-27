
document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();
	if (document.querySelector('#todo').value.length == 0)
		alert("please Enter a Task")
	else {
		document.querySelector('#toDoList').innerHTML += `
		<div>
			<li class="list">${document.querySelector('#todo').value}</li>
			<button id="edit"><i class="fa fa-edit"></i></button>
			<button id="delete"><i class="far fa-trash-alt"></i></button>
		</div>`;

		document.querySelector('#todo').value = "";

		let delete_task = document.querySelectorAll('#delete')
		for (let i = 0; i < delete_task.length; i++) {
			delete_task[i].onclick = function () {
				this.parentElement.remove();
			}
		}
		const task = document.querySelectorAll('.list');
		task.forEach(list => {
			list.addEventListener('click', function handleClick(e) {
					list.setAttribute('style', `color: red; text-decoration: line-through;`);
			})
		})
		let edit_task = document.querySelectorAll('#edit')
		for (let i = 0; i < edit_task.length; i++) {
			edit_task[i].onclick = function () {
				console.log(this.parentElement.firstElementChild.textContent);
				document.querySelector('#todo').value = this.parentElement.firstElementChild.textContent;
			}
		}
	}
})
