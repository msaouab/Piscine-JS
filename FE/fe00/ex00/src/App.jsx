
import { useState } from 'react'
import './App.css'

function App() {
	const [data, setData] = useState('');
	const [todo, setTodo] = useState([]);

	const handleOnChange = (e) => {
		setData(e.target.value);
	}
	const AddItem = (e) => {
		if (data.length !== 0)
		todo.unshift(data);
		setData('');
		console.log(todo);
	}
	const onDelete = (id) => {
		console.log(id);
		const newTodo = todo.filter((todo) => todo.id === id)
		console.log(newTodo);
		setTodo(newTodo)
	}
	return (
		<>
			<div className='container'>
				<h1>Todo List</h1>
				<div className='inputFilled'>
					<input
						type="text"
						name="todo"
						value={data}
						placeholder='Enter your Todo list...'
						onChange={handleOnChange}
						autoComplete="off"
					/>
					<button
						type="submit"
						onClick={AddItem}>Add
					</button>
				</div>
				<ul>
					{todo.map((item, id) => 
					<li key={id}> { item }
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="delete"
							onClick={() => onDelete(id)}>
  							<path strokeLinecap="round"
  								strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="edit"
							>
							<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
						</svg>
					</li>
					)}
				</ul>
			</div>
		</>
	)
}

export default App
