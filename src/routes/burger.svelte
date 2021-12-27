<script>
	import BurgerMenu from 'svelte-burger-menu';
	//import { onMount } from 'svelte';
	//import { moveDown } from '../lib/gsap';

	moveDown() {

gsap.to('.text' , {y: 50, duration: 2})

}

</script>

<BurgerMenu>
	<h2>Home</h2>
	<h2>About</h2>
</BurgerMenu>

<h1 class="text">Hello GSAP is very moving!</h1>

<style>
	h2 {
		color: white;
	}
</style>
