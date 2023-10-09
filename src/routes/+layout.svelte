<script>
    import Header from "$lib/Components/Header.svelte";
    import Footer from "$lib/Components/Footer.svelte";
    import { page } from "$app/stores";
    import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

    export let data

    $: ({ supabase, session } = data)

    onMount(() => {
        const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
    })
</script>

<Header path={$page.url.pathname}/>

<slot />

<Footer />