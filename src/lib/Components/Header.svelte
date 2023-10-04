<script>
    export let path

    let crumbs = [];

    $: {
        const tokens = path.split('/').filter((t) => t !== '');

        let tokenPath = '';
        crumbs = tokens.map((t) => {
            t = t.charAt(0).toUpperCase() + t.slice(1);

            tokenPath += '/' + t;
            return {
                label: t,
                href: tokenPath,
            };
        });

        crumbs.unshift({ label: 'Home', href: '/' });
    }
</script>

<header>
    <div>
        <div class="header-wrapper">
            <a href="/">
                <img src="/images/logo.svg" alt="Hogeschool van Amsterdam" />
            </a>

            <span>Platform Grote Thema's</span>
        </div>

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

    .header-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: row wrap;
        column-gap: 1rem;
        row-gap: 0.6rem;
    }

    span {
        color: var(--color-hva-pink);
        font-weight: 800;
        font-size: 1rem;
    }

    img:first-child {
		max-width: 10rem;
	}

    a {
		text-decoration: none !important;
	}

    nav {
		padding: 0.6rem 0 0;
        font-weight: 500;
	}

    .graphic {
		position: absolute;
		top: 0rem;
		z-index: -1;
		max-width: 70%;
	}

    @media (min-width: 30rem){
        span{
            font-size: 1.2rem;
        }
    }

    @media (min-width: 48rem){
        span{
            font-size: 1.8rem;
        }
    }

    @media (min-width: 64rem){
        span{
            font-size: 2rem;
        }
    }
</style>