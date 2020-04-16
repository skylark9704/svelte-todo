import { writable } from 'svelte/store';

let todoData = [
		{id:1, title:'Wash hands'},
		{id:2, title: 'Maintain social distance'},
		{id:3, title: 'Eat Healthy'}
	]

function createTodos() {
	const { subscribe, set, update } = writable(0);
	set(todoData)
	
	const deleteTodo = (id) => {
		update(_todos => {
			let newTodos = [..._todos]
			let index = newTodos.findIndex(todo => {
				if(todo.id === id) return todo
			})
			newTodos.splice(index, 1)
			return newTodos
			})
		}

	const addTodo = (todo) => {
		update(_todos => {
			console.log('Adding new todo')
			let newTodo = {id: Math.floor((Math.random() * 100000) + 1), title:todo}
			let newTodos = [..._todos]
			newTodos.push(newTodo)
			return newTodos
		})
	}

	return {
		subscribe,
		delete: deleteTodo,
		add: addTodo
	};
}

export const todos = createTodos();