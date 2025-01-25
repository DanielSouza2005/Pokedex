import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import PokeAPIURL from "../shared/globals";

export const SearchPokemonContext = createContext();
SearchPokemonContext.displayName = "Pokémon";

export const SearchPokemonProvider = ({ children }) => {
    let [searchPokemonID, setSearchPokemonID] = useState(1);
    let [searchPokemonNome, setSearchPokemonNome] = useState("");
    let [searchPokemonSprite, setSearchPokemonSprite] = useState("");

    const ProximoID = () => {
        setSearchPokemonID((id) => Math.min(1025, id + 1));
    }

    const AnteriorID = () => {
        setSearchPokemonID((id) => Math.max(1, id - 1))
    }

    const { dados, carregando, erro } = useFetch(`${PokeAPIURL}${searchPokemonID}`);

    useEffect(() => {
        if (dados) {
            const sprite =
                (dados.id > 649) ?
                    dados['sprites']['front_default'] :
                    dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

            setSearchPokemonNome(dados.name);
            setSearchPokemonSprite(sprite);
        }
    }, [dados]);

    return (
        <SearchPokemonContext.Provider value={{
            searchPokemonID, setSearchPokemonID,
            searchPokemonNome, setSearchPokemonNome,
            searchPokemonSprite, setSearchPokemonSprite,
            ProximoID, AnteriorID,
            carregando
        }} >
            {children}
        </SearchPokemonContext.Provider>
    );
}