<script>
	export let website, firstName, lastName, businessName, medium;
</script>

<div class="card">
	<a href={website}>
		<h2>{businessName}</h2>
	</a>
	<p>by {firstName} {lastName}</p>
	<a class="tag" href="/medium/{medium}">#{medium}</a>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		border: 2px solid var(--clr-purple);
		/* outline: 2px solid var(--clr-blue); */
		border-radius: 0.5rem;
		padding: 1rem 1rem;
		margin: 1rem;
	}

	p {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	a {
		padding: 0.5rem;
		border-radius: 0.5rem;
		color: var(--clr-purple);
	}

	a:hover {
		color: var(--clr-blue);
		background-color: var(--clr-purple);
	}
</style>
