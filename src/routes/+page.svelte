<script>
    import Button from '$lib/Components/Login/Button.svelte'

    export let data

    console.log(data.werkvormen);
</script>

<main>
    <Button />
</main>

<style>
    main {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
	}
</style>