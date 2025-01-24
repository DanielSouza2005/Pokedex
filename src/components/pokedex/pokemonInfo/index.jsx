import "./pokemonInfo.css";

const PokemonInfo = ({ children, estilo }) => {
    return (
        <span className={estilo}>
            {children}
        </span>
    );
}

export default PokemonInfo;