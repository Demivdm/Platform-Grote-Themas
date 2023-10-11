<script>
	import { applyAction, enhance } from '$app/forms';

	export let form;
	let loading = false;
    let showLogin = true;
    let showVerify = false;

	const handleSubmit = () => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
			loading = false;
		};
	};

    const toggleLogin = () => {
        showLogin = !showLogin;
        showVerify = !showVerify;
    }
</script>

<main>
	<section>
		<!-- Heading -->
		<header>
			<h1>Login</h1>
			<p>
				Log nu in om jouw werkvorm te uploaden, favoriete werkvormen op te slaan en werkvormen te
				delen met collega's.
			</p>
		</header>

		<!-- Login Form -->
		<form action="?/send-magiclink" method="post" use:enhance={handleSubmit} class:showLogin={showLogin}>
			<div class="form-content">
				<!-- Email -->
				<div class="form-field">
					<label for="email">Emailadres</label>
					<input
						value={form?.values?.email ?? ''}
						type="email"
						id="email"
						name="email"
						placeholder="Vul hier uw emailadres in"
						required
					/>
				</div>
			</div>

			<!-- Submit -->
			<div class="form-submit">
				<div class="icon-box">
					<img src="/images/icons/arrow-right.svg" alt="Arrow Icon" />
				</div>
				<button type="submit" on:click={toggleLogin}>Inloggen</button>
			</div>
		</form>

        <!-- Check email -->
        <article class:showVerify={showVerify}>
            <h2>Verificatie vereist</h2>
            <p>Check uw email voor de verificatie link.</p>
        </article>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
	}

    section {
        display: flex;
        flex-direction: column;
        margin: 6rem auto 0;
        gap: 3rem;
        max-width: 25rem;
    }

    header {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
    }

    h1 {
        font-size: 1.6rem;
        font-weight: 700;
    }

    header > p {
        font-size: 0.9rem;
        font-weight: 400;
    }

    form {
        display: none;
        flex-direction: column;
        row-gap: 2rem;
    }

    .showLogin {
        display: flex;
    }

    .form-content {
        display: flex;
        flex-direction: column;
        padding: 2rem 2rem;
        background: var(--color-hva-navy);
    }

    .form-field {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
        margin-bottom: 1rem;
    }

    label {
        font-size: 1rem;
        font-weight: 600;
    }

    input {
        padding: 0.5rem 0.8rem;
        border: 2px solid var(--color-white);
        background-color: var(--color-hva-navy);
        color: var(--color-white);
    }

    input::placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-family: 'Open Sans Italic', sans-serif;
    }

    .form-submit {
        display: flex;
        align-items: center;
        position: relative;
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

    button {
        padding: 0.9rem 1.8rem 0.9rem 2.3rem;
        border: none;
        background-color: var(--color-hva-navy);
        color: var(--color-white);
        font-size: 0.9rem;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        cursor: pointer;
    }

    button:hover{
        background-color: #362e61;
    }

    .form-submit:has(button:hover) .icon-box {
        transform: scale(1.4);
    }

    article {
        display: none;
        flex-direction: column;
        justify-content: center;
        row-gap: 0.5rem;
        padding: 2rem 2rem;
        background: var(--color-hva-navy);
    }

    article h2{
        font-size: 1.2rem;
        font-weight: 700;
        text-align: center;
    }

    article p{
        font-size: 0.9rem;
        font-weight: 400;
        text-align: center;
    }

    .showVerify {
        display: flex;
    }

	@media (min-width: 48rem) {
		main {
			height: calc(100dvh - 9rem);
			/* justify-content: center; */
		}

        section {
            flex-direction: row;
            gap: 2rem;
            margin: 0 auto;
            max-width: unset;
            position: relative;
            top: 25%;
        }

        header {
            justify-content: center;
            max-width: 20rem;
        }

        form {
            width: 30rem;
        }

        article {
            width: 30rem;
        }
	}

    @media (min-width: 64rem){
        section{
            gap: 4rem;
        }

        header h1 {
            font-size: 3rem;
        }

        header > p {
            font-size: 1rem;
        }
    }
</style>
