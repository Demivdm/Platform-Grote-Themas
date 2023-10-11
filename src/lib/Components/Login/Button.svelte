<script>
    import { applyAction, enhance } from '$app/forms'
	import { invalidate } from '$app/navigation'
	import { page } from '$app/stores'

    let loading = false

    const handleLogout = () => {
		loading = true
		return async ({ result }) => {
			await invalidate('supabase:auth')
			await applyAction(result)
			loading = false
		}
	}
</script>

{#if $page.data.session}
	<form action="/logout" method="post" use:enhance={handleLogout}>
		<div class="form-submit">
			<div class="icon-box">
				<img src="/images/icons/arrow-right.svg" alt="Arrow Icon" />
			</div>
			<button disabled={loading} type="submit">Uitloggen</button>
		</div>
	</form>
{:else}
	<div class="form-submit">
		<div class="icon-box">
			<img src="/images/icons/arrow-right.svg" alt="Arrow Icon" />
		</div>
		<a href="/login">Inloggen</a>
	</div>
{/if}

<style>
    form {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
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
		left: -0.6rem;
		background: var(--color-hva-pink);
		padding: 0.25rem;
		aspect-ratio: 1/1;
		transform: rotate(45deg);
		transition: transform 0.2s ease-in-out;
	}

	.icon-box > img {
		width: 0.8rem;
		height: 0.8rem;
		transform: rotate(-45deg);
	}

	button {
		padding: 0.4rem 0.9rem 0.4rem 1.3rem;
		border: none;
		background-color: var(--color-hva-navy);
		color: var(--color-white);
		font-size: 0.9rem;
		font-weight: 600;
		font-family: 'Open Sans', sans-serif;
		cursor: pointer;
	}

	button:hover {
		background-color: #362e61;
	}

	.form-submit:has(button:hover) .icon-box {
		transform: scale(1.4);
	}

    .form-submit a{
        padding: 0.4rem 0.9rem 0.4rem 1.3rem;
		border: none;
		background-color: var(--color-hva-navy);
		color: var(--color-white);
		font-size: 0.9rem;
		font-weight: 600;
		font-family: 'Open Sans', sans-serif;
		cursor: pointer;
    }

    .form-submit a:hover{
        background-color: #362e61;
    }

    .form-submit:has(a:hover) .icon-box {
		transform: scale(1.4);
	}
</style>
