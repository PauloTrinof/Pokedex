/*
quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

pra isso vamos precisar trabalhar com 2 elementos 
1- listagem 
2- cartão dos pokemon

precisamos criar 2 variaveis no JS para trabalhar com os elementos da tela 

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons 

- remover a classe "aberto" só do cartão que estar aberto 
- ao clicar em um pokemon da listagem pegamos o ID desse pokemon para saber qual pokemon mostrar
- remover a classe ativo que marca o pokemon selecionado -
- adicionar a classe ativo no item da lista selecionado

*/

// precisamos criar 2 variaveis no JS para trabalhar com os elementos da tela 

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons 

    pokemon.addEventListener('click', () => {
        //remover a classe "aberto" só do cartão que estar aberto 

        const cartaPokemonAberto = document.querySelector('.aberto')
        cartaPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o ID desse pokemon para saber qual pokemon mostrar

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaPokemonParaAbrir.classList.add('aberto')

        // remover a classe ativo que marca o pokemon selecionado -

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // adicionar a classe ativo no item da lista selecionado

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})