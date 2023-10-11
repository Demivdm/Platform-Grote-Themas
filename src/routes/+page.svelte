<script>
	import Button from '$lib/Components/Login/Button.svelte'

	export let data

    //
	console.log(data.werkvormen)

	data.werkvormen.forEach((werkvorm) => {
		console.log(werkvorm.title)
	})

    // Gebruik maken van variabelen in string
    `test ${variable}`
</script>

<main>
	<Button />

    <!-- Voorbeeld for each werkvormen -->
	{#each data.werkvormen as werkvorm}
		<section class="card">
			<h1>{werkvorm.title}</h1>
            <p>{werkvorm.beschrijving}</p>
		</section>
	{/each}

    <!-- If statement in sveltekit -->
    {#if (condition == true)}
        <p>Condition is true</p>
    {:else}
        <p>Condition is false</p>
    {/if}

</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
	}
</style>
