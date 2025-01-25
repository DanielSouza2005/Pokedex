import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import PokeAPIURL from "../shared/globals";

export const SearchPokemonContext = createContext();
SearchPokemonContext.displayName = "Pokémon";

export const SearchPokemonProvider = ({ children }) => {
    const [searchPokemonID, setSearchPokemonID] = useState(1);
    const [searchPokemonNome, setSearchPokemonNome] = useState("");
    const [searchPokemonSprite, setSearchPokemonSprite] = useState("");
    const [searchInputPokemon, setSearchInputPokemon] = useState("");

    const ProximoID = () => {
        setSearchPokemonID((id) => id + 1);
    }

    const AnteriorID = () => {
        setSearchPokemonID((id) => Math.max(1, id - 1))
    }

    const aoPesquisarPokemon = (evento, pesquisa) => {
        evento.preventDefault();

        if (!pesquisa.trim()) return;

        if (Number.isInteger(Number(pesquisa))) {
            setSearchPokemonID(Number(pesquisa));
            setSearchPokemonNome("");
        } else {
            setSearchPokemonID("");
            setSearchPokemonNome(pesquisa.toLowerCase());
        }

        setSearchInputPokemon("");
    }

    const { dados, carregando, erro } = useFetch(`${PokeAPIURL}${searchPokemonID || searchPokemonNome}`);

    useEffect(() => {
        if (dados && !erro) {
            const sprite =
                (dados.id === 0) ?
                    dados['sprites']['front_default'] :
                    (dados.id > 649) ?
                        dados['sprites']['front_default'] :
                        dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

            setSearchPokemonNome(dados.name);
            setSearchPokemonSprite(sprite);
            setSearchPokemonID(dados.id);
        }
    }, [dados, erro]);

    return (
        <SearchPokemonContext.Provider value={{
            searchPokemonID, setSearchPokemonID,
            searchPokemonNome, setSearchPokemonNome,
            searchPokemonSprite, setSearchPokemonSprite,
            searchInputPokemon, setSearchInputPokemon,
            ProximoID, AnteriorID, aoPesquisarPokemon,
            carregando
        }} >
            {children}
        </SearchPokemonContext.Provider>
    );
}