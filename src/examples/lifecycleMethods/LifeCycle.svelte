<script>
	import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
	let value = ''
	onMount(() => {
		console.log('Mounted')
	});

	onDestroy( () => {
		console.log('Bye Bye')
	})

	beforeUpdate(() => {
		console.log('Beginning Update')
	});

	afterUpdate(() => {
		console.log('Update Complete')
	});
</script>

<style>
	div{
		padding:16px
	}
</style>

<div>
	<h3>Life Cycle Methods Example</h3>
	<hr>
	<p>{value}</p>
	<br>
	<input type="text" bind:value={value} />
</div>

<div>
</div>