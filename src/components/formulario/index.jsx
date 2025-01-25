import { useContext } from "react";
import "./formulario.css";
import { SearchPokemonContext } from "../../context/searchPokemon";

const Formulario = ({ children, aoPesquisar }) => {

    const { searchInputPokemon } = useContext(SearchPokemonContext);

    return (
        <form 
            className="form"
            onSubmit={(evento) => aoPesquisar(evento, searchInputPokemon)}
        >
            {children}
        </form>
    );
}

export default Formulario;