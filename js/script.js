const pokemonName = document.querySelector('.pokemon_name');
const pokemonId = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }

}

const RenderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonId.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data) {

        pokemonName.innerHTML = data.name;
        pokemonId.innerHTML = data.id;
        //pokemonImage.src = data['sprites']['versions']['generation-iii']['firered-leafgreen']['front_default'];
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        input.value = '';
        searchPokemon = data.id;
    } else {
        pokemonName.innerHTML = 'MissingNo';
        pokemonId.innerHTML = 0;
        pokemonImage.src = './images/MissingNo.png';
    }

}

form.addEventListener('submit', (event) => {

    event.preventDefault();

    RenderPokemon(input.value.toLowerCase());

});

buttonPrev.addEventListener('click', () => {

    if(searchPokemon > 1){
        searchPokemon -= 1;
        RenderPokemon(searchPokemon);
    }
    

});

buttonNext.addEventListener('click', () => {

    searchPokemon += 1;
    RenderPokemon(searchPokemon);

});

RenderPokemon(searchPokemon);