import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../utils/Routes";


const PokemonCard = ({pokemon}) => {
    return (
        <div className='pokemon-wrapper'>

            <div className='Pokemon-img'>
                <img src={pokemon.sprites.front_default} alt="pokemon"/>
            </div>
            <p className='Pokemon-name'>
                <NavLink to={PATH.POKEMON_DESCRIPTION +`${pokemon.name}`}>{pokemon.name}</NavLink>
            </p>

        </div>
    );
};

export default PokemonCard;