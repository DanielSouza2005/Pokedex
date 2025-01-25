import "./pokedex.css";
import pokedexImage from "../../images/pokedex.png";
import { useState } from "react";

import PokeAPIURL from "../../shared/globals.js";
import useFetch from "../../hooks/useFetch.jsx";

import PokemonData from "./pokemonData";
import Formulario from "../formulario";
import Campo from "../campo";
import Imagem from "../imagem";
import Botao from "../botao";
import Titulo from "../titulo/index.jsx";

const Pokedex = () => {
    let [searchPokemonID, setSearchPokemonID] = useState("1");
    let [searchPokemonNome, setSearchPokemonNome] = useState("Bulbasaur");

    const { dados, carregando } = useFetch(`${PokeAPIURL}${searchPokemonID}`);

    // console.log(searchPokemonID, searchPokemonNome, dados);

    return (
        <>
            <Titulo>{carregando ? "Carregando..." : ""}</Titulo>

            {!carregando && dados && (
                <Imagem
                    src={dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}
                    alt="Pokémon"
                    estilo="pokemonImage"
                />
            )}

            <PokemonData id={searchPokemonID} nome={carregando ? searchPokemonNome : dados?.name} />

            <Formulario>
                <Campo
                    type="search"
                    estilo="inputSearch"
                    placeholder="Nome ou Número"
                    required
                />
            </Formulario>

            <div className="buttons">
                <Botao estilo="button">
                    Anterior
                </Botao>
                <Botao estilo="button">
                    Próximo
                </Botao>
            </div>

            <Imagem
                src={pokedexImage}
                alt="Pokédex"
                estilo="pokedex"
            />
        </>
    );
}

export default Pokedex;