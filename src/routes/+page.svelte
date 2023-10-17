<script>
	import Button from '$lib/Components/Login/Button.svelte'

	export let data

	// Beschikbare data in werkvormen
	console.log(data.werkvormen)

	data.werkvormen.forEach((werkvorm) => {
		console.log(werkvorm.title)
	}) // Gebruik maken van variabelen in string
	// `test ${variable}`

	let activeFilterButton = false;

	function toggleOpen(){
		activeFilterButton = !activeFilterButton;
	}
	
</script>

<main>
	

	<!-- Voorbeeld for each werkvormen -->
	<!-- {#each data.werkvormen as werkvorm}
		<section class="card">
			<h1>{werkvorm.title}</h1>
			<p>{werkvorm.beschrijving}</p>
		</section>
	{/each} -->

	<!-- If statement in sveltekit -->
	<!-- {#if condition == true}
		<p>Condition is true</p>
	{:else}
		<p>Condition is false</p>
	{/if} -->

	 <section class="nav-and-intro">
		<section class="intro">
			<h2>Werkvormen en thema's</h2>
			<p>Bekijk hier alle werkvormen en thema’s. Opzoek naar iets specifieks? Gebruik dan de zoekbalk. Of klik op één van de tags
			</p>
		</section>
		<nav>
			<svg width="50" height="50" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="47.1882" height="47.1882" transform="matrix(0.704691 -0.709514 0.70921 0.704998 0 33.4807)" fill="#F25379"/>
				<path d="M33.9924 16.9313C33.4066 16.3456 32.4569 16.3456 31.8711 16.9313L22.3252 26.4773C21.7394 27.0631 21.7394 28.0128 22.3252 28.5986C22.9109 29.1844 23.8607 29.1844 24.4465 28.5986L32.9318 20.1133L41.417 28.5986C42.0028 29.1844 42.9526 29.1844 43.5384 28.5986C44.1242 28.0128 44.1242 27.0631 43.5384 26.4773L33.9924 16.9313ZM31.4318 38.9176C31.4318 39.746 32.1033 40.4176 32.9318 40.4176C33.7602 40.4176 34.4318 39.746 34.4318 38.9176L31.4318 38.9176ZM31.4318 17.992L31.4318 38.9176L34.4318 38.9176L34.4318 17.992L31.4318 17.992Z" fill="white"/>
				<path d="M22.9672 45.8928H42.8963" stroke="white" stroke-width="3" stroke-linecap="round"/>
				<path d="M24.4672 39.9141C24.4672 39.0856 23.7956 38.4141 22.9672 38.4141C22.1387 38.4141 21.4672 39.0856 21.4672 39.9141H24.4672ZM24.4672 45.8928V39.9141H21.4672V45.8928H24.4672Z" fill="white"/>
				<path d="M44.3964 39.9141C44.3964 39.0856 43.7248 38.4141 42.8964 38.4141C42.0679 38.4141 41.3964 39.0856 41.3964 39.9141H44.3964ZM44.3964 45.8928V39.9141H41.3964V45.8928H44.3964Z" fill="white"/>
				</svg>
			<button><a href="/upload">Werkvorm uploaden</a></button>
			<Button></Button>
		</nav>

	</section>

	<section class="filter-menu">
	<ul  class="focus">
		<button  class:active={activeFilterButton} on:click={toggleOpen} class="focus-button">Focus</button>
		<div class:active={activeFilterButton}>
			<div class="drop-down-focus">
				<li ><input type="checkbox">Ik</li>
			<li><input type="checkbox">De ander</li>
			<li><input type="checkbox">De wereld</li>
			</div>
			
		</div>
		
	</ul>
	<ul class="doel">
		<button  class:active={activeFilterButton} on:click={toggleOpen} class="focus-button">Doel</button>
		<div class:active={activeFilterButton}>
			<div class="drop-down-doel">
				<li><input type="checkbox">Professioneel id ontwikkelen</li>
		<li><input type="checkbox">Persoonlijke interesse aanspreken</li>
		<li><input type="checkbox">Kennis opdoen</li>
		<li><input type="checkbox">Richtlijnen toepassen</li>
		<li><input type="checkbox">Golden oldies verrijken</li>
		<li><input type="checkbox">Tools toepassen</li>
		<li><input type="checkbox">Dialoog voeren</li>
		<li><input type="checkbox">Praktijk betrekken</li>
			</div>
			
		</div>
		
		
	</ul>
	<ul class="onderwerp">
		<button  class:active={activeFilterButton} on:click={toggleOpen} class="focus-button">Onderwerp</button>
		<div class:active={activeFilterButton}>
			<div class="drop-down-onderwerp">
				<li><input type="checkbox">Duurzaamheid</li>
		<li><input type="checkbox">Diversiteit</li>
		<li><input type="checkbox">Digitalisering</li>
		<li><input type="checkbox">Democratie</li>
			</div>
			
		</div>
		
	</ul>
	<ul class="fase">
		<button  class:active={activeFilterButton} on:click={toggleOpen} class="focus-button">Fase</button>
		<div class:active={activeFilterButton}>
			<div class="drop-down-fase">
				<li><input type="checkbox">Opwarmer</li>
			<li><input type="checkbox">Verbreden</li>
			<li><input type="checkbox">Verdiepen</li>
			<li><input type="checkbox">Uitwisselen</li>
			</div>
			
		</div>

		
	</ul> 
	<!-- zoekbalk -->
	<div class="input-search">
		<input type="search">
	<button class="search-button">Zoek</button>
	</div>
	 
	</section>
	<section class="werkvormen">

			{#each data.werkvormen as werkvorm}
		<section class="werkvorm">
			<img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Begrippenlijst.svg" alt="">
			<article>
				<h3>{werkvorm.title}</h3>
			<p class="text-overflow">{werkvorm.beschrijving}</p>
			<div class="info-buttons">
					
				<a href="/{werkvorm.link}"><svg width="50" height="53" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM0 9H22V7H0L0 9Z" fill="white"/>
					</svg> Lees meer</a>
				
				<a href="/{werkvorm.link}"><svg width="50" height="53" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM0 9H22V7H0L0 9Z" fill="white"/>
					</svg>Bekijk video</a>
					{#each werkvorm.tags as tag}
					<p class="tag">{werkvorm.tag}</p>
					{/each}
			</div>
			
			</article>
			
		</section>
	{/each}
		</section>
		
	
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
		width: 100%;
		
	}

	h2,h3{
		font-size: 2.5em;
	}
	p{
		font-size: 25px;
		line-height:3em;
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
		font-size: 1em;
	}
	nav > svg {
		position: relative;
		top: 2em;
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

	.filter-menu{
display: flex;
padding-left: 1em;
justify-content: space-between;

		
	}
	ul, li{
		font-size: 20px;
		line-height: 3em;
		
	}
	ul button{
		visibility: visible;
	}


	ul li input[type="checkbox"] {
		margin-right: 1em;
		margin-left: .5em;
}


	li:hover{
		background-color: #1e1649;
	}

	.focus {
		visibility: hidden;
	}
	
	.doel {
		visibility: hidden;
	}
	.onderwerp{
		visibility: hidden;
	}

	.fase{
		visibility: hidden;
	}

	.focus button{
		border: 4px solid #66E5BF;
		text-align: center;
		padding: 1em 2em 1em 2em;
		font-size: 1em;
	}
	.doel button{
		border: 4px solid #F25379;
		text-align: center;
		padding: 1em 2em 1em 2em;
		font-size: 1em;
	}
	.onderwerp button{
		border: 4px solid #AEA4E5;
		text-align: center;
		padding: 1em 2em 1em 2em;
		font-size: 1em;
	}
	.fase button{
		border: 4px solid #FEF84C;
		text-align: center;
		padding: 1em 2em 1em 2em;
		font-size: 1em;
	}

	
	.active{
		visibility: visible;
		background-color: #FEF84C;
		color: black;
		
	}
	

	.drop-down-focus{
	position: absolute;
	background-color: #66E5BF;
	padding: 1em 2em 1em .5em;
}
.drop-down-doel{
	position: absolute;
	background-color: #F25379;
	padding: 1em 2em 1em .5em;
}
.drop-down-onderwerp{
	position: absolute;
	background-color: #AEA4E5;
	padding: 1em 2em 1em .5em;
}
.drop-down-fase{
	position: absolute;
	background-color: #FEF84C;
	padding: 1em 2em 1em .5em;
}
	

		

	.filter-menu input[type="search"] {
  width: 20em;
  padding: 1em;
  border: 10px solid var(--color-hva-navy);

  
}

.search-button {
  font-size: 1.5em;
  background-color: var(--color-hva-pink);
  padding: .5em 2em .5em 2em;
  margin-left: 1em;
  
}


.werkvormen{
	margin-top: 5em;
}

	.werkvorm{
		background-color: #1e1649;
		padding: 2em;
		margin: 1em;
		max-width: 40vw;
    flex-wrap: wrap;

		
	}

	.text-overflow{
		position: relative;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 30vw;
		
	}

	.werkvorm > img{
		width: 28em;
	}

	article{
		display: flex;
		flex-direction: column;
		
	}

	article > h3{
		margin: 1em 0 1em 0;
	}

	.info-buttons {
		font-size: 2em;
		font-weight: 900;
		display: flex;
		flex-direction: column;
		
	}
	.info-buttons a > svg{
		top: .5em;
		margin-right: .5em;
		position: relative;
	}

	.tag{
		border: 4px solid #66E5BF;
		width: 10em;
		margin-top: 1em;
		text-align: center;
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

			inset: .8em 5em 0 3em;
			
		}

		.werkvorm > img{
		width: 28em;
		margin-right: 5em;
	}

		.werkvormen{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
	
			
			
		}
		.werkvorm{
			margin: 1em;
			display: flex;
			flex-direction: row;
			background-color: transparent;

			
		}
	}

	@media (min-width: 1300px) {}
</style>
