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

<h2>
	Check this out:
	https://answers.netlify.com/t/deploy-failed-build-script-returned-non-zero-exit-code-2/44263/2
</h2>

<br />
<br />

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
