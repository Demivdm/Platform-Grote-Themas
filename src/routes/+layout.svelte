<script>
    import Header from "../lib/Components/Header.svelte";
    import Footer from "../lib/Components/Footer.svelte";
    import werkvorm from "../lib/Components/werkvorm.svelte";
</script>

<Header />

<main>
    <slot />
</main>

<Footer />