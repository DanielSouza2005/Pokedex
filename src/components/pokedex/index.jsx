import "./pokedex.css";
import pokedexImage from "../../images/pokedex.png";

import PokemonData from "./pokemonData";
import Formulario from "../formulario";
import Campo from "../campo";
import Imagem from "../imagem";
import Botao from "../botao";

const Pokedex = () => {
    return (
        <>
            <Imagem 
                src="#"
                alt="Pokémon"
                estilo="pokemonImage"
            />

            <PokemonData />

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