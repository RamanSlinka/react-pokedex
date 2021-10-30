import React from 'react';
import {useLocation} from "react-router-dom";

const PokemonDescription = () => {

    const location = useLocation()
    console.log(location)
    return (
        <div className='main-page-wrapper'>
            <div className='Pokemon-description-wrapper'>
                <img src={location.state.pokemon.sprites.front_default} alt="pokemon"/>
                <div className='description-block'>
                    <p className='Pokemon-name'>
                        {location.state.pokemon.name}
                    </p>
                    <div className='Pokemon-Card-types'>
                        {location.state.pokemon.types.map((type, i) => {
                            return <div
                                key={i}
                                className='Pokemon-type'>
                                {type.type.name}
                            </div>
                        })}
                    </div>
                    <div className='Pokemon-info'>
                        <div className='info-block'>
                            <p className='info'>Height :</p>
                            <p className='info'>{location.state.pokemon.height}</p>
                        </div>
                        <div className='info-block'>
                            <p className='info'>Ability : </p>
                            <p className='info'>{location.state.pokemon.abilities[0].ability.name}</p>
                        </div>
                        <div className='info-block'>
                            <p className='info'>Weight : </p>
                            <p className='info'>{location.state.pokemon.weight}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PokemonDescription;