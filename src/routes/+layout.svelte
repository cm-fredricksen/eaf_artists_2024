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
		width: 80%;
		margin: 2rem auto;
	}
</style>
