<script>
	export let data;

	$: ({ testTable, user } = data);
</script>

<section>
    <div class="block">
        <p>Ingelogde user: {user.email}</p>
    </div>
    <div class="block">
        <p>User:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
</section>

<style>
    section {
        width: 50%;
        margin: 0 auto;
    }

    .block {
        margin-bottom: 2rem;
    }

    pre {
        background-color: #323030;
        color: #cfcfcf;
        font-size: 0.875em;
        overflow-x: auto;
        padding: 1.25rem 1.5rem;
        white-space: pre;
        word-wrap: normal;
    }
</style>