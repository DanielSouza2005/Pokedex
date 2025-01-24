import PokemonInfo from "../pokemonInfo";
import Titulo from "../../titulo";

const PokemonData = () => {
    return (
        <Titulo>
            <PokemonInfo>
                1
            </PokemonInfo> -
            <PokemonInfo
                estilo="pokemonInfo"
            >
                Bulbasaur
            </PokemonInfo>
        </Titulo>
    );
}

export default PokemonData;