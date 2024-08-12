<script>
	import Card from '$lib/components/Card.svelte';

	export let data;
	console.log(data);
</script>

{#each data.summaries as { website, businessName, firstName, lastName, medium }}
	<Card {website} {firstName} {lastName} {medium} {businessName} />
	<a href={website}>{businessName}</a>
{/each}
