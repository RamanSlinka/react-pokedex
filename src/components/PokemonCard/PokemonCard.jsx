import React from 'react';

const PokemonCard = ({pokemon}) => {
    return (
        <div>
            <div className='Pokemon-img'>
                <img src={pokemon.sprites.front_default} alt="pokemon"/>
            </div>
            <div className='Pokemon-Name'>
                {pokemon.name}
            </div>


        </div>
    );
};

export default PokemonCard;