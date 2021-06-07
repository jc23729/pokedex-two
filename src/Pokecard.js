import React from 'react';
import './Pokecard.css';


const POKE_API =
  "https://raw.githubusercontent.com/" +
    "PokeAPI/sprites/master/sprites/pokemon/";
  

/** Individual Pokemon card. */

function Pokecard(props) {
    let imgSrc = `${POKE_API}${props.id}.png`;

    return (
        <div className="Pokecard">
            <div className = "Pokecard-title"></div>

        </div>
    )

}


export default Pokecard;

