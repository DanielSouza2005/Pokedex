import { useContext } from "react";
import "./campo.css";
import { SearchPokemonContext } from "../../context/searchPokemon";

const Campo = ({ type, estilo, placeholder, required, value }) => {

    const { setSearchInputPokemon } = useContext(SearchPokemonContext);

    const aoDigitar = (evento) => {
        setSearchInputPokemon(String(evento.target.value));
    }

    return (
        <input
            type={type}
            className={estilo}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={(evento) => aoDigitar(evento)}
        />
    );
}

export default Campo;