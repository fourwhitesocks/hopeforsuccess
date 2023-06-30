<script>
	//here in the child this is the default value
	export let title = 'SvelteKit Sandbox Site';
	export let email = 'info@info.com';
	export let name = 'Lhotse';
	export let breed = 'hanoverian';
</script>

<!-- in order to pass title as a prop we have to add the export before the variable above -->
<div class="title">
	<h1>{title}</h1>
	<h4>{email} {name}</h4>
	<h5>{breed}</h5>
</div>

<style>
	h1 {
		font-weight: bolder;
		color: blue;
		font-size: 3rem;
	}
</style>
