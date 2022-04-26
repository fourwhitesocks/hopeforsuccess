<script>
	export let title = 'SvelteKit Sandbox Site';
</script>

<!-- in order to pass title as a prop we have to add the export before the variable above -->
<div class="title">
	<h1>{title}</h1>
</div>

<style>
	h1 {
		font-weight: bolder;
		color: blue;
		font-size: 3rem;
	}
</style>
