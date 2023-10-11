<script>
	export let data
	let werkvorm = data.werkvormen[0]
</script>

<main>
	<section>
		<div class="upload-button">
			<div class="icon-box">
				<img src="/images/icons/upload.svg" alt="Upload icon" />
			</div>
			<a href="/upload">Ben jij docent en wil je zelf een werkvorm uploaden? Klik dan hier om je aan te melden.</a>
		</div>

		<header>
			<h1>{werkvorm.title}</h1>
			<p>{werkvorm.korteBeschrijving}</p>
		</header>

		<!-- svelte-ignore a11y-media-has-caption -->
        {#if werkvorm.video == null}
        <img src={werkvorm.thumbnail.url} alt="Thumbnail" />
        {:else}
        <video controls poster={werkvorm.thumbnail.url}>
            <source src={werkvorm.video.url} type={werkvorm.mimeType} />
        </video>
        {/if}

		<article class="content">
            <div class="content-left">
                <div class="beschrijving">
                    <h2>Beschrijving</h2>
                    <p>{werkvorm.beschrijving}</p>
                </div>

                <div class="extra-info">
                    <div class="info-left">
                        <h3>Faculteit/Opleiding</h3>
                        <p>{werkvorm.opleiding.faculteit.titel} - {werkvorm.opleiding.titel}</p>
                    </div>
                    <div class="info-right">
                        <h3>Contactpersonen</h3>
                        {#each werkvorm.contactpersonen as contactpersoon}
                            <p>{contactpersoon.email}</p>
                        {/each}
                    </div>
                </div>
            </div>

            <div class="content-right">
                <div class="action-buttons">
                    <div class="action-button">
                        <div class="icon-box">
                            <img src="/images/icons/download.svg" alt="Download icon" />
                        </div>
                        <!-- TODO Add download link material -->
                        <a href="/">Download materiaal</a>
                    </div>
                    <div class="action-button">
                        <div class="icon-box">
                            <img src="/images/icons/arrow-right.svg" alt="Arrow Icon" />
                        </div>
                        <a href="/">Terug naar overzicht</a>
                    </div>
                </div>

                <div class="tags">
                    <h2>Tags</h2>
                    <div class="tag-list">
                        {#each werkvorm.tags as tag}
                            <div class="tag" style="border-color: {tag.kleur.css};">
                                <p>{tag.titel}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
		</article>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 0 1rem 8rem;
	}

	section {
		display: flex;
		flex-direction: column;
		margin: 1rem 0;
		gap: 2rem;
	}

	.upload-button {
		display: flex;
		align-items: center;
		position: relative;
		margin: 0 0 1rem auto;
        max-width: 27rem;
	}

    .action-button {
        display: flex;
		align-items: center;
		position: relative;
		margin: 0 1rem;
        max-width: 27rem;
    }

	.icon-box {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: -1rem;
		background: var(--color-hva-pink);
		padding: 0.5rem;
		aspect-ratio: 1/1;
		transform: rotate(45deg);
		transition: transform 0.2s ease-in-out;
	}

	.icon-box > img {
		width: 1rem;
		height: 1rem;
		transform: rotate(-45deg);
	}

	a {
		padding: 0.9rem 1.8rem 0.9rem 2.3rem;
		border: none;
		background-color: var(--color-hva-navy);
		color: var(--color-white);
		font-size: 0.9rem;
		font-weight: 600;
		font-family: 'Open Sans', sans-serif;
		cursor: pointer;
	}

	a:hover {
		background-color: #362e61;
	}

	header {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	header h1 {
		font-size: 1.4rem;
		font-weight: 700;
	}

	header p {
        font-size: 1rem;
        font-weight: 400;
	}

	video {
		width: 100%;
        border-radius: 5px;
        max-width: 28rem;
	}

    img {
        width: 100%;
        border-radius: 5px;
        max-width: 28rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .content-left {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .beschrijving {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .beschrijving h2 {
        font-size: 1.2rem;
        font-weight: 700;
    }

    .beschrijving p {
        font-size: 1rem;
        font-weight: 400;
    }

    .extra-info {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .extra-info .info-left {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

    .extra-info .info-right {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

    .extra-info h3 {
        font-size: 1rem;
        font-weight: 700;
    }

    .extra-info p {
        font-size: 0.9rem;
        font-weight: 400;
    }

    .content-right {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .tags {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .tags h2 {
        font-size: 1.2rem;
        font-weight: 700;
    }

    .tag-list {
        display: flex;
        flex-flow: row wrap;
        gap: 0.5rem;
    }

    .tag {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid;
        padding: 0.3rem 0.5rem;
    }

    .tag p {
        font-size: 0.9rem;
        font-weight: 400;
    }

    .action-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: relative;
    }

    @media (min-width: 700px){
        main{
            padding: 0 3rem 8rem;
        }

        .content{
            flex-direction: row;
            gap: 3rem;
        }

        .content-left{
            width: 55%;
        }

        .extra-info{
            flex-direction: row;
            gap: 2rem;
        }

        .content-right{
            width: 45%;
            margin-top: 3rem;
        }
    }

    @media (min-width: 1024px){
        section{
            gap: 1.5rem;
        }

        header h1{
            font-size: 1.8rem;
        }

        video{
            max-width: 40rem;
        }

        .content {
            margin-top: 1rem;
        }

        .content-left{
            width: unset;
        }

        .beschrijving{
            max-width: 35rem;
        }

        .beschrijving h2 {
            font-size: 1.3rem;
        }

        .content-right{
            width: unset;
        }
    }

</style>
