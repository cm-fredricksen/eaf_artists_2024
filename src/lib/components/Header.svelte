<script>
	import Nav from './Nav.svelte';
</script>

<header>
	<a href="/">
		<h1>Artists 2024</h1>
	</a>
	<Nav />
</header>

<style>
	header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		padding: 1rem 0.5rem;
		background-color: var(--clr-purple);
		color: var(--clr-white);
	}
	header a {
		color: var(--clr-white);
		font-family: var(--font-text);
	}
	header a:hover {
		color: var(--clr-blue);
	}
</style>
