<script>
    import Login from "$lib/Components/Auth/Login.svelte";
    import { createClient } from '@supabase/supabase-js';
    import { onMount } from 'svelte';

    const url = "https://xczcwiywulkazvlanunc.supabase.co";
    const anon_key = import.meta.env.VITE_ANON_KEY;

    let user;
    const supabase = createClient(url, anon_key);

    async function signInWithMagicLink(email) {
        const { user, error } = await supabase.auth.signInWithOtp({ email })
        console.log(user, error)
    }

    const signOut = () => {
        supabase.auth.signOut()
    }

    onMount(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            user = session?.user;
        });
    });
</script>

<main>
    {#if user}
        <h1>Logged in as {user.email}</h1>
    {:else}
        <h1>Not logged in</h1>
    {/if}
    <Login {signInWithMagicLink} {signOut}/>
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
            /* justify-content: center; */
        }
    }
</style>
