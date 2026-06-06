async function buscarPokemon(pokemon, jogador) {
    try {

        const response =
            await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        const data = await response.json()

        if (jogador === "jogador") {

            document.getElementById("nome-jogador").textContent =
                data.name.toUpperCase()

            document.getElementById("img-jogador").src =
                data.sprites.back_default

            document.getElementById("nivel-jogador").textContent =
                Math.floor(Math.random() * 50) + 1

            const hp = data.stats[0].base_stat

            document.getElementById("hp-jogador").style.width =
                `${hp}%`

        } else {

            document.getElementById("nome-inimigo").textContent =
                data.name.toUpperCase()

            document.getElementById("img-inimigo").src =
                data.sprites.front_default

            document.getElementById("nivel-inimigo").textContent =
                Math.floor(Math.random() * 50) + 1

            const hp = data.stats[0].base_stat

            document.getElementById("hp-inimigo").style.width =
                `${hp}%`
        }

    } catch (erro) {

        alert("Pokémon não encontrado!")

        console.log(erro)
    }
}

const botao = document.getElementById("btn-batalha")

botao.addEventListener("click", () => {

    const pokemonJogador =
        document.getElementById("pokemon-jogador-input").value

    const pokemonInimigo =
        document.getElementById("pokemon-inimigo-input").value

    buscarPokemon(pokemonJogador, "jogador")
    buscarPokemon(pokemonInimigo, "inimigo")

    
    const musica =
        document.getElementById("musica-batalha")

    musica.currentTime = 0
    musica.play()
})