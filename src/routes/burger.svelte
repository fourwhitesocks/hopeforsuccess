<script>
	import BurgerMenu from 'svelte-burger-menu';
	import { onMount } from 'svelte';
	import { moveDown } from '../lib/gsap';

	onMount(() => {
		moveDown();
	});
</script>

<BurgerMenu>
	<h2>Home</h2>
	<h2>About</h2>
</BurgerMenu>

<h1 class="text">Hello GSAP is very moving!</h1>

<br />
<br />

<p>
	Check this Repl out too: https://svelte.dev/repl/48e6aee735cb4dadb9dbb112143fe365?version=3.44.3
</p>

<div class="box" />

<style>
	h2 {
		color: white;
	}

	.box {
		width: 100px;
		height: 100px;
		background: black;
	}
</style>
