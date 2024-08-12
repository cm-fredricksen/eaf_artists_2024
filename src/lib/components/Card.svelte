<script>
	export let website, firstName, lastName, businessName, medium;
</script>

<div class="card">
	<a href={website}>
		<h2>{businessName}</h2>
	</a>
	<p>by {firstName} {lastName}</p>
	<a href="/medium/{medium}">#{medium}</a>
</div>
