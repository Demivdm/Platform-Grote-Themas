<script>
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';

	let loading = false;

	const handleLogout = () => {
		loading = true;
		return async ({ result }) => {
			await invalidate('supabase:auth');
			await applyAction(result);
			loading = false;
		};
	};
</script>

<svelte:head>
	<title>Platform Grote Thema's - Login</title>
</svelte:head>

<main class="container is-max-desktop">
	<div class="navbar-menu my-4">
		<div class="navbar-end">
			{#if $page.data.session}
				<form action="/logout" method="post" use:enhance={handleLogout}>
					<button disabled={loading} type="submit">Sign out</button>
				</form>
			{/if}
		</div>
	</div>

	<slot />
</main>