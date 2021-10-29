import React from 'react';
const PokemonDescription = ({pokemon}) => {
    return (
        <div>
            <div className='Pokemon-img'>
                <img src={pokemon.sprites.front_default} alt="pokemon"/>
            </div>
            <p className='Pokemon-Name'>
                {pokemon.name}
            </p>


            <div className='Pokemon-Card-types'>
                {pokemon.types.map((type, i) => {
                    return <div
                        key={i}
                        className='Pokemon-type'>
                        {type.type.name}
                    </div>
                })}
            </div>
            <div className='Pokemon-info'>
                <div>
                    <p className='title'>Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className='Pokemon-ability'>
                    <p className='title'>Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonDescription;