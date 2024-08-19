<script>
	import Card from '$lib/components/Card.svelte';

	export let data;
	// console.log(data);
</script>

<svelte:head>
	<title>EAF 2024 | Artists</title>
</svelte:head>

<div class="container">
	{#each data.summaries as { website, businessName, firstName, lastName, medium }}
		<Card {website} {firstName} {lastName} {medium} {businessName} />
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
