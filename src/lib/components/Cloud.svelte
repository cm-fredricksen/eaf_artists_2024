<script>
	import { artists } from '../../routes/artists';
	/**
	 * @type {string[]}
	 */
	let medList = [];

	artists.forEach((artist) => {
		medList.push(artist.Medium);
		return medList;
	});

	const mediumList = [...new Set(medList)];
</script>

<div class="container">
	<h3>Mediums</h3>
	<div class="list_box">
		{#each mediumList.sort() as medium}
			<div class="card">
				<p>
					<a href="/medium/{medium}">#{medium}</a>
				</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: grid;
	}
	.list_box {
		display: flex;
		flex-wrap: wrap;
		background-color: var(--clr-blue);
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 0.25rem;
	}
	a {
		font-weight: bold;
		font-size: small;
		margin: 1rem;
		font-family: var(--font-accent);
	}
	a:hover {
		color: white;
		background-color: var(--clr-purple);
	}
</style>
