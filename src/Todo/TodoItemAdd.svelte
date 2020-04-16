<script>
    export let onAdd;
    let todo = '';

    const add = (todoItem) => {
        onAdd(todoItem)
        todo = ''
    }
</script>
<h3>Add Todo</h3>
<input type="text" bind:value={todo} />
<button  on:click={add(todo)}>Add</button>