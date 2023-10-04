<script>
    import Login from "$lib/Components/Auth/Login.svelte";
</script>

<main>
    <Login />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
    }

    @media (min-width: 48rem) {
        main {
            height: calc(100dvh - 9rem);
            justify-content: center;
        }
    }
</style>
