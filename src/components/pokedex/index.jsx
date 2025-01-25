import "./pokedex.css";
import pokedexImage from "../../images/pokedex.png";
import { memo, useContext } from "react";

import { SearchPokemonContext } from "../../context/searchPokemon.jsx";

import PokemonData from "./pokemonData";
import Formulario from "../formulario";
import Campo from "../campo";
import Imagem from "../imagem";
import Botao from "../botao";
import Botoes from "../botoes/index.jsx";

const Pokedex = memo(() => {

    const {
        searchPokemonID, searchPokemonNome, 
        searchPokemonSprite, searchInputPokemon,
        ProximoID, AnteriorID, aoPesquisarPokemon,
        carregando
    } = useContext(SearchPokemonContext);

    // console.log(searchPokemonID, searchPokemonNome, searchPokemonSprite);

    return (
        <>
            {
                !carregando && searchPokemonSprite && (
                    <Imagem
                        src={searchPokemonSprite}
                        alt="Pokémon"
                        estilo="pokemonImage"
                    />
                )
            }

            <PokemonData
                id={searchPokemonID}
                nome={searchPokemonNome}
            />

            <Formulario
                aoPesquisar={(evento) => aoPesquisarPokemon(evento, searchInputPokemon)}
            >
                <Campo
                    type="search"
                    estilo="inputSearch"
                    placeholder="Nome ou Número"
                    required
                    value={searchInputPokemon}
                />
            </Formulario>

            <Botoes>
                <Botao
                    estilo="button"
                    aoClicar={() => AnteriorID()}
                >
                    Anterior
                </Botao>
                <Botao
                    estilo="button"
                    aoClicar={() => ProximoID()}
                >
                    Próximo
                </Botao>
            </Botoes>

            <Imagem
                src={pokedexImage}
                alt="Pokédex"
                estilo="pokedex"
            />
        </>
    );
});

export default Pokedex;