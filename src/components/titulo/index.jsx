import "./titulo.css";

const Titulo = ({ children }) => {
    return (
        <h1 className="pokemonData">
            {children}
        </h1>
    );
}

export default Titulo;