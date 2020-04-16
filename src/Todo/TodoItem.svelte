<script>
	export let todo;
	export let onDelete;
</script>

<style>
	button {
		outline: 'none';
		color: #212121;
		border: 2px solid #eee;
		border-radius: '10px';
		background-color: #FFF
	}
</style>

<li>{todo.title} <button on:click|once={onDelete(todo.id)}>Delete</button></li>