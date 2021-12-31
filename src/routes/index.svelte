<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter/index.svelte';

	import fields from '$lib/data/fields.json';
	import dogs from '$lib/data/dogs.json';
	import { parse } from 'cookie';
	import { loop_guard } from 'svelte/internal';

	//const post = group_1;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<h3>
		This is <strong>NEW!</strong>
	</h3>
	<h4>
		Adding in some <strong>JSON</strong>
	</h4>

	<Counter />
</section>

<article>
	<h3>This is from a blog post from Rodney Labs: https://rodneylab.com/sveltekit-json-import/</h3>
	<h4>His github code for this is: https://github.com/rodneylab/sveltekit-json-import</h4>
	<p>
		In this learning example I used his blog post but for the fileds I used the application of
		JustFields.com for some of the JSON.
		https://stackoverflow.com/questions/59665222/innerhtml-from-json-file
	</p>

	<div class="fields">
		<h2>My JSON fields</h2>
		<!-- We can access the fileds default import which is an array directly in the code -->
		{#each fields as { title, author, image, post_text }, index}
			<h2>{author}</h2>
			<p><strong>{title}</strong></p>

			<p id="mystery">{@html post_text}</p>

			<img src={image} alt="some alt text here" width="500" />
		{/each}
	</div>

	<h1>Information about the dogs</h1>
	{#each dogs as { species, age, fav_food }, index}
		<div class="dogs">
			<h2>Type of dog is a: {species}</h2>
			<h3>It is {age} years old.</h3>
			<h4>The dogs favorite food is: {fav_food}.</h4>
		</div>
	{/each}
</article>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
		font-size: 3rem;
	}

	h2 {
		font-weight: 400;
		font-size: 2rem;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
