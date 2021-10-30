import React from 'react';
import {Link} from "react-router-dom";
import {PATH} from "../../utils/Routes";


const PokemonCard = ({pokemon}) => {

    return (
        <div className='pokemon-wrapper'>

            <div className='Pokemon-img'>
                <img src={pokemon.sprites.front_default} alt="pokemon"/>
            </div>
            <p className='Pokemon-name'>

                <Link to={{
                    pathname: `${PATH.POKEMON_DESCRIPTION}${pokemon.name}`,
                    state: {
                        pokemon
                    }
                }}>{pokemon.name}</Link>
            </p>

        </div>
    );
};

export default PokemonCard;