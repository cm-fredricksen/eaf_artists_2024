<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<div class="container">
	<slot />
</div>
<Footer />

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 2rem;
		margin: 0 auto;
	}
</style>
