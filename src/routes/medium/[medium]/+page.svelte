<script>
	import { artists } from '../../artists.js';
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

<h2>#{data.medium}</h2>
<div class="container">
	{#each matched as vals, i}
		<div class="card">
			<a href={vals.Website} target="_blank"><h3>{vals['Business Name']}</h3></a>
			<p>by {vals['First Name']} {vals['Last Name']}</p>
		</div>
	{/each}
</div>
