<script>
    export let path

    let crumbs = [];

    $: {
        const tokens = path.split('/').filter((t) => t !== '');

        let tokenPath = '';
        crumbs = tokens.map((t) => {
            let tUpper = t.charAt(0).toUpperCase() + t.slice(1);

            tokenPath += '/' + t;
            return {
                label: tUpper,
                href: tokenPath,
            };
        });

        crumbs.unshift({ label: 'Home', href: '/' });
    }
</script>

<header>
    <div>
        <a href="/">
            <img src="/images/logo.svg" alt="Hogeschool van Amsterdam" />
        </a>

        <nav>
            {#each crumbs as c, i}
                {#if i == crumbs.length-1}
                    {c.label}
                {:else}
                    <a href={c.href}>{c.label}</a> &#47;&nbsp;
                {/if}
            {/each}
		</nav>
    </div>
    <img src="/images/hva-triangle.svg" alt="" class="graphic">
</header>

<style>
    header > div {
        padding: 2rem 2rem 0;
    }

    img:first-child {
		max-width: 8rem;
	}

    a {
		text-decoration: none !important;
	}

    nav {
		padding: 1rem 0;
        font-weight: 500;
	}

    .graphic {
		position: absolute;
		top: 0rem;
		z-index: -1;
		max-width: 70%;
	}
</style>