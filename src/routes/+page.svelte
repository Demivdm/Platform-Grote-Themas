{#if user}
    <h1>Logged in as {user.email}</h1>
{:else}
    <h1>Not logged in</h1>
{/if}