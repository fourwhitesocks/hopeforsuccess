<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<!-- TODO lose the @next! -->
	<pre>npm init svelte@next</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>

<!-- "/src/routes/test-form.svelte" -->
<form name="test" method="post" netlify>
	<input type="hidden" name="form-name" value="test" />
	<!-- <input type="text" name="bot-field" /> -->
	<p>
		<label>Your Name: <input type="text" name="name" /></label>
	</p>
	<p>
		<label>Your Email: <input type="email" name="email" /></label>
	</p>
	<p>
		<label>Message: <textarea name="message" /></label>
	</p>
	<p>
		<button type="submit">Send</button>
	</p>
</form>

<section>
	<h2>Image block</h2>
	<div class="photo">
		<img
			src="https://res.cloudinary.com/dqphd28vv/image/upload/v1640818834/anns-back-yard_u6mjoe.jpg"
			alt="yard"
		/>

		<img
			src="https://res.cloudinary.com/dqphd28vv/image/upload/v1640818847/boat-office_os8adt.jpg"
			width=""
			alt="boat office"
		/>
		<img
			src="https://res.cloudinary.com/dqphd28vv/image/upload/v1640818841/middlebass_mejtkg.jpg"
			alt="middlebass"
		/>
	</div>
</section>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	.photo {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-auto-flow: column;
	}

	img {
		max-width: 100%;
		height: auto;
	}
</style>
