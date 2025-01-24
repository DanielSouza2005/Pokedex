import "./pokedex.css";

const Pokedex = () => {
    return (
        <>
            <img src="#" alt="Pokémon" className="pokemon_image" />

            <h1 className="pokemon_data">
                <span className="pokemon_number"></span> -
                <span className="pokemon_name"></span>
            </h1>

            <form className="form">
                <input
                    type="search"
                    className="input_search"
                    placeholder="Name or Number"
                    required
                />
            </form>

            <div className="buttons">
                <button className="button btn-prev">Prev &lt</button>
                <button className="button btn-next">Next &gt</button>
            </div>

            <img src="images/pokedex.png" alt="pokedex" className="pokedex" />
        </>
    );
}

export default Pokedex;