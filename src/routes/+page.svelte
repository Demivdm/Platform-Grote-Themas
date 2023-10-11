<script>
	import Button from '$lib/Components/Login/Button.svelte'

	export let data

	// Beschikbare data in werkvormen
	console.log(data.werkvormen)

	data.werkvormen.forEach((werkvorm) => {
		console.log(werkvorm.title)
	}) // Gebruik maken van variabelen in string
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
	{#if condition == true}
		<p>Condition is true</p>
	{:else}
		<p>Condition is false</p>
	{/if}

	<!-- <section class="nav-and-intro">
		<section class="intro">
			<h2>Werkvormen en thema's</h2>
			<p>Bekijk hier alle werkvormen en thema’s. Opzoek naar iets specifieks? Gebruik dan de zoekbalk. Of klik op één van de tags
			</p>
		</section>
		<nav>
			<svg width="100" height="100" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="47.1882" height="47.1882" transform="matrix(0.704691 -0.709514 0.70921 0.704998 0 33.4807)" fill="#F25379"/>
				<path d="M33.9924 16.9313C33.4066 16.3456 32.4569 16.3456 31.8711 16.9313L22.3252 26.4773C21.7394 27.0631 21.7394 28.0128 22.3252 28.5986C22.9109 29.1844 23.8607 29.1844 24.4465 28.5986L32.9318 20.1133L41.417 28.5986C42.0028 29.1844 42.9526 29.1844 43.5384 28.5986C44.1242 28.0128 44.1242 27.0631 43.5384 26.4773L33.9924 16.9313ZM31.4318 38.9176C31.4318 39.746 32.1033 40.4176 32.9318 40.4176C33.7602 40.4176 34.4318 39.746 34.4318 38.9176L31.4318 38.9176ZM31.4318 17.992L31.4318 38.9176L34.4318 38.9176L34.4318 17.992L31.4318 17.992Z" fill="white"/>
				<path d="M22.9672 45.8928H42.8963" stroke="white" stroke-width="3" stroke-linecap="round"/>
				<path d="M24.4672 39.9141C24.4672 39.0856 23.7956 38.4141 22.9672 38.4141C22.1387 38.4141 21.4672 39.0856 21.4672 39.9141H24.4672ZM24.4672 45.8928V39.9141H21.4672V45.8928H24.4672Z" fill="white"/>
				<path d="M44.3964 39.9141C44.3964 39.0856 43.7248 38.4141 42.8964 38.4141C42.0679 38.4141 41.3964 39.0856 41.3964 39.9141H44.3964ZM44.3964 45.8928V39.9141H41.3964V45.8928H44.3964Z" fill="white"/>
				</svg>
			<button>Werkvorm uploaden</button>
			<svg width="100" height="100" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="47.1882" height="47.1882" transform="matrix(0.704691 -0.709514 0.70921 0.704998 0 33.4807)" fill="#F25379"/>
				<path d="M33.9924 16.9313C33.4066 16.3456 32.4569 16.3456 31.8711 16.9313L22.3252 26.4773C21.7394 27.0631 21.7394 28.0128 22.3252 28.5986C22.9109 29.1844 23.8607 29.1844 24.4465 28.5986L32.9318 20.1133L41.417 28.5986C42.0028 29.1844 42.9526 29.1844 43.5384 28.5986C44.1242 28.0128 44.1242 27.0631 43.5384 26.4773L33.9924 16.9313ZM31.4318 38.9176C31.4318 39.746 32.1033 40.4176 32.9318 40.4176C33.7602 40.4176 34.4318 39.746 34.4318 38.9176L31.4318 38.9176ZM31.4318 17.992L31.4318 38.9176L34.4318 38.9176L34.4318 17.992L31.4318 17.992Z" fill="white"/>
				<path d="M22.9672 45.8928H42.8963" stroke="white" stroke-width="3" stroke-linecap="round"/>
				<path d="M24.4672 39.9141C24.4672 39.0856 23.7956 38.4141 22.9672 38.4141C22.1387 38.4141 21.4672 39.0856 21.4672 39.9141H24.4672ZM24.4672 45.8928V39.9141H21.4672V45.8928H24.4672Z" fill="white"/>
				<path d="M44.3964 39.9141C44.3964 39.0856 43.7248 38.4141 42.8964 38.4141C42.0679 38.4141 41.3964 39.0856 41.3964 39.9141H44.3964ZM44.3964 45.8928V39.9141H41.3964V45.8928H44.3964Z" fill="white"/>
				</svg>
			<button>Inloggen</button>
		</nav>

	</section>

	<section class="filter-menu">
	<ul class="focus">
		<li>Focus</li>
		<li>Ik</li>
		<li>De ander</li>
		<li>De wereld</li>
	</ul>
	<ul class="doel">
		<li>Doel</li>
		<li>Professioneel id ontwikkelen</li>
		<li>Persoonlijke interesse aanspreken</li>
		<li>Kennis opdoen</li>
		<li>Richtlijnen toepassen</li>
		<li>Golden oldies verrijken</li>
		<li>Tools toepassen</li>
		<li>Dialoog voeren</li>
		<li>Praktijk betrekken</li>
	</ul>
	<ul class="onderwerp">
		<li>Onderwerp</li>
		<li>Duurzaamheid</li>
		<li>Diversiteit</li>
		<li>Digitalisering</li>
		<li>Democratie</li>
	</ul>
	<ul class="fase">
		<li>Fase</li>
		<li>Opwarmer</li>
		<li>Verbreden</li>
		<li>Verdiepen</li>
		<li>Uitwisselen</li>
	</ul> -->
	<!-- zoekbalk -->
	<!-- <input type="search">
	<button>Zoek</button>
	</section>
	<section class="werkvormen">
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/281px-Placeholder_view_vector.svg.png" alt="">
		<section class="werkvorm">
			<article>
				<h3>Waarom is X belangrijk</h3>
				<p>Aan het begin van een ontwerp traject is deze werkvorm in te zetten om studenten meer persoonlijk te betrekken bij het onderwerp.

				</p>
				<a href="app.html">Lees meer</a>
				<a href="app.html">Bekijk video</a>
			</article>
		</section>
		<section class="werkvorm">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/281px-Placeholder_view_vector.svg.png" alt="">
		<article>
				<h3>Waarom is X belangrijk</h3>
				<p>Aan het begin van een ontwerp traject is deze werkvorm in te zetten om studenten meer persoonlijk te betrekken bij het onderwerp.

				</p>
				<a href="app.html">Lees meer</a>
				<a href="app.html">Bekijk video</a>
			</article>
		</section>
		<section class="werkvorm">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/281px-Placeholder_view_vector.svg.png" alt="">
		 <article>
				<h3>Waarom is X belangrijk</h3>
				<p>Aan het begin van een ontwerp traject is deze werkvorm in te zetten om studenten meer persoonlijk te betrekken bij het onderwerp.

				</p>
				<a href="app.html">Lees meer</a>
				<a href="app.html">Bekijk video</a>
			</article>
		</section>
		<section class="werkvorm">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/281px-Placeholder_view_vector.svg.png" alt="">
		<article>
				<h3>Waarom is X belangrijk</h3>
				<p>Aan het begin van een ontwerp traject is deze werkvorm in te zetten om studenten meer persoonlijk te betrekken bij het onderwerp.

				</p>
				<a href="app.html">Lees meer</a>
				<a href="app.html">Bekijk video</a>
			</article>
		</section>
		<section class="werkvorm"></section>
	</section> -->
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
	}

	.nav-and-intro {
		display: flex;
		flex-direction: column;
	}

	nav {
		display: flex;
		flex-direction: column;
	}
	nav > button {
		margin: 1em 1em 1em 1.5em;

		padding: 1em;
		background-color: #1e1649;
		border: none;
		color: white;
		font-size: 2em;
	}
	nav > svg {
		position: relative;
		top: 8em;
	}

	.intro {
		margin: 2em;
	}
	.intro > h2 {
		font-size: 2.8em;
		font-weight: 900;
		margin-bottom: 0.5em;
	}

	.intro > p {
		font-size: 2em;
	}

	@media (min-width: 650px) {
		.nav-and-intro > nav {
			order: 1;
		}
		.nav-and-intro > .intro {
			order: 2;
		}
		nav {
			justify-content: flex-end;
			flex-direction: row;
		}

		nav > button {
			padding-left: 2em;
		}
		nav > svg {
			position: relative;

			inset: 2em 0 0 5.9em;
		}
	}
</style>
