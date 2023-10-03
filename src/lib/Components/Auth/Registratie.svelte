<section>
    <!-- Heading -->
    <header>
        <h1>Registratie</h1>
        <p>Registreer nu om jouw werkvorm te uploaden, favoriete werkvormen op te slaan en werkvormen te delen met collega's.</p>
    </header>

    <!-- Registratie Form -->
    <form action="/registratie" on:submit|preventDefault>
        <div class="form-content">
            <!-- Email -->
            <div class="form-field">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Vul hier uw emailadres in">
            </div>

            <!-- Gebruikersnaam -->
            <div class="form-field">
                <label for="gebruikersnaam">Gebruikersnaam</label>
                <input type="text" id="gebruikersnaam" name="gebruikersnaam" placeholder="Vul hier uw gebruikersnaam in">
            </div>

            <!-- Wachtwoord -->
            <div class="form-field">
                <label for="wachtwoord">Wachtwoord</label>
                <input type="password" id="wachtwoord" name="wachtwoord" placeholder="Vul hier uw wachtwoord in">
            </div>

            <!-- Al een account -->
            <p>Al een account? <a href="/login">Inloggen</a></p>
        </div>

        <!-- Submit -->
        <div class="form-submit">
            <div class="icon-box">
                <img src="/images/icons/arrow-right.svg" alt="Arrow Icon">
            </div>
            <button type="submit">Registreren</button>
        </div>
    </form>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        margin: 2rem 2rem;
        gap: 3rem;
    }

    header {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
        max-width: 20rem;
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
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        max-width: 30rem;
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

    .form-content > p {
        font-size: 0.8rem;
        font-weight: 600;
    }

    .form-content > p > a {
        position: relative;
    }

    .form-content > p > a::after {
        content: '';
        position: absolute;
        bottom: -0.2rem;
        left: 0.5rem;
        width: 100%;
        height: 0.1rem;
        background-color: var(--color-white);
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
    }

    .icon-box > img {
        width: 1rem;
        height: 1rem;
        transform: rotate(-45deg);
    }

    button {
        padding: 0.9rem 1.8rem 0.9rem 2rem;
        border: none;
        background-color: var(--color-hva-navy);
        color: var(--color-white);
        font-size: 0.9rem;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        cursor: pointer;
    }

    @media (min-width: 48rem){
        section {
            flex-direction: row;
            gap: 3rem;
            justify-content: space-evenly;
            margin-top: 8rem;
        }

        header {
            justify-content: center;
        }

        form {
            width: 30rem;
        }
    }

    @media (min-width: 64rem){
        header h1 {
            font-size: 2rem;
        }

        header > p {
            font-size: 1rem;
        }
    }
</style>