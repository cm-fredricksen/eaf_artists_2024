<script>
	const links = [
		{
			title: 'Home',
			path: '/'
		},
		{
			title: 'Dakota Center for the Arts',
			path: '/'
		},
		{
			title: 'Eagan Art Festival',
			path: 'https://www.eaganartfestival.org/'
		}
	];
</script>

<nav>
	{#each links as { title, path }}
		<a href={path}>{title}</a>
	{/each}
</nav>
