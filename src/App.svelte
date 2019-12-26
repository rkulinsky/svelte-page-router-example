<script>
    import Loading from './Loading.svelte';

    export let component = null,
        pathname = '',
        path = '',
        hash = '',
        params = {},
        query = {},
        state = {};

    export let name;
</script>

<main>
    <h1>{name}</h1>

    <a href="/">Page 1</a>
    <a href="/page2">Page 2</a>

    <svelte:component 
        this={component || Loading} 
        {...state} 
        {pathname} 
        {path} 
        {hash} 
        {params} 
        {query}
    />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 600;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>