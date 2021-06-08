import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Index of Pokemon: show individual cards. */

functon Pokedex(props) {
    let winMessage = null;
    if (props.isWinner) {
        winMessage = <p className="Pokedex-winner">THIS HAND WINS</p>;
    }
    return (
        <div className="Pokedex">
            <h2 className = "Pokedex-title">Pokedex</h2>
        </div>
        
    );
}

export default Pokedex;