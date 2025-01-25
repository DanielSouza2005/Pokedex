import Pokedex from "./components/pokedex";
import "./App.css";
import { SearchPokemonProvider } from "./context/searchPokemon";

function App() {
  return (
    <main>

      <SearchPokemonProvider>
        <Pokedex />
      </SearchPokemonProvider>

    </main>
  );
}

export default App;
