<script>
    import Header from "../lib/Components/Header.svelte";
    import Footer from "../lib/Components/Footer.svelte";
    import { page } from "$app/stores";
</script>

<Header path={$page.url.pathname}/>

<slot />

<Footer />