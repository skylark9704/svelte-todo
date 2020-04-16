<script>
  import TodoItem from "./TodoItem.svelte";
  import TodoItemAdd from "./TodoItemAdd.svelte";
  import { todos } from "../store.js";

  const deleteEvent = id => {
    todos.delete(id);
  };

  const addEvent = todo => {
    todos.add(todo);
  };
</script>

<style>
  .flex-container {
    display: flex;
  }

  .flex-child {
	flex: 1;
	padding: 16px;
  }

  .flex-child:first-child {
    margin-right: 20px;
  }
</style>

<div class={'flex-container'}>
  <div class={'flex-child'}>
	<h3>Todos</h3>
    <ul>
      {#each $todos as todo}
        <TodoItem {todo} onDelete={deleteEvent} />
      {/each}
    </ul>
  </div>

  <div class={'flex-child'}>
    <TodoItemAdd onAdd={addEvent} />
  </div>
</div>
