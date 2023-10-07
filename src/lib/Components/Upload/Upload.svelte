<body>
<div class="titel"><h1>Platform Grote Thema’s</h1></div>
<h2>Upload Formulier</h2>
<form method="POST" action="">
    <label>
        <h3>Naam Video</h3>
        <input name="werkvorm" type="name">
    </label>
    <label>
        <h3>Beschrijving Video</h3>
        <input name="Beschrijving" type="Beschrijving">
    </label>
    <label>
       <h3>Naam Faculteit</h3>
        <input name="Faculteit" type="Faculteit">
    </label>
    <label>
       <h3>Naam opleiding</h3>
        <input name="Opleiding" type="Opleiding">
    </label>
    <label>
        <h3>Video uploaden</h3>
    <input id="file" type="file" accept="video/mp4,video/mkv, video/x-m4v,video/*">
    </label>
    </form>
<button class="button-versturen">Versturen</button>
</body>
<style>

/*form{*/
/*    position:absolute;*/
/*    top:470px;*/
/*    left:90px;*/
/*    width:1357px;*/
/*    margin-left: 5rem;*/
/*    height:auto;*/
/*    font-size: 20px;*/
/*    background-color: coral;*/
/*}*/
h1 {
    font: ExtraBold;
    font-size: 64px;
margin-left: 60rem;
    color: #F25379;
}
h2{
    margin-top: 10rem;
    margin-left: 28rem;
}
    form {
        max-width: 60rem;
        margin: 0 auto;
        margin-top: 5rem;
        background-color: #1E1649;
        height: 50rem;
        padding: 2rem;
    }
label{
    margin-top: 2rem;
    margin-bottom: 2rem;
    font:Extrabold;

}
    #file{
        height: 10rem;
        background-color: #1E1649;
        border: solid 2 white;
    }
    label {
        display: block;
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        padding: 8px;
        margin-top: 3px;
        margin-bottom: 10px;
        box-sizing: border-box;
        background-color: #1E1649;
        border: 2px solid #FFFFFF;
        color: #FFFFFF;
    }

    button {
        background-color: #1E1649;
        color: white;
        padding:10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #F25379;
    }
    .button-versturen{
        margin-left: 32rem;
        margin-top: 4rem;
        margin-bottom: 15rem;
        font-size: large;
        padding: 1rem 1rem;
    }
</style>


