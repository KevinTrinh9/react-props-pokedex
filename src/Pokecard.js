import React from 'react';
import './Pokecard.css';

const pokeApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

/** Individual Pokemon card. */

function Pokecard(props) {
    let imgSrc = `${pokeApi}${props.id}.png`;
    return (
    <div className="Pokecard">
        <div className="Pokecard-title">{ props.name }</div>
        <img className="Pokecard-image" src={imgSrc} alt="" />
        <div className="Pokecard-data">Type: {props.type}</div>
        <div className="Pokecard-data">EXP: {props.exp}</div>
    </div>
    );
}

export default Pokecard;