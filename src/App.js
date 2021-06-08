import logo from './logo.svg';
import Pokecard from "./Pokecard.js";

function App(props) {
  return (
    <div className="App">
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
