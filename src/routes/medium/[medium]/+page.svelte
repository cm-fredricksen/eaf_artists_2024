<script>
	import { artists } from '../../artists.js';
	import Card from '$lib/components/Card.svelte';
	export let data;

	let vals;
	let i;

	const matched = artists.filter((media) => media.Medium === data.medium);

	for (const [key, value] of Object.entries(matched)) {
		(vals = value), (i = key);
	}
</script>

<svelte:head>
	<title>EAF 2024 | {data.medium}</title>
</svelte:head>

<h2 class="page_title">#{data.medium}</h2>
<div class="container">
	{#each matched as vals, i}
		<Card
			website={vals.Website}
			businessName={vals['Business Name']}
			firstName={vals['First Name']}
			lastName={vals['Last Name']}
			medium={vals.Medium}
		/>
	{/each}
</div>

<style>
	.page_title {
		text-align: center;
	}
	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
