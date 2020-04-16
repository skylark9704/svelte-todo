<script>
  import { onDestroy } from "svelte";
  export let title = "";

  const formatter = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });

  let time = formatter.format(new Date());

  const interval = setInterval(() => {
    time = formatter.format(new Date());
  }, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<style>
  .header {
    padding: 8px 10px;
    background-color: crimson;
    color: whitesmoke;
  }
</style>

<div class={'header'}>
  <span>{title} | {time}</span>
</div>
