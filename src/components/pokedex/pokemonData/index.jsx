import PokemonInfo from "../pokemonInfo";
import Titulo from "../../titulo";

const PokemonData = ({ id, nome }) => {

    return (      
        <Titulo>
            <PokemonInfo> {id} </PokemonInfo> - <PokemonInfo estilo="pokemonInfo"> {nome} </PokemonInfo>
        </Titulo>
    );
}

export default PokemonData;