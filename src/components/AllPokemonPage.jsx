import React, {useEffect, useState} from 'react';
import {getAllPokemon, getPokemon} from "../utils/pokemon";
import PokemonCard from "./PokemonCard/PokemonCard";
import {Button} from "antd";
const AllPokemonPage = () => {

    const [loading, setLoading] = useState(true)
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');

    const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            setLoading(false);
             await loadingPokemon(response.results)
        }

        fetchData();
    }, [])

    const next = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous);
        setLoading(false)
    }

    const prev = async () => {
        if (!prevUrl) return;
        setLoading(true);
        let data = await getAllPokemon(prevUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous);
        setLoading(false)
    }


    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            return await getPokemon(pokemon.url);

        }))
        setPokemonData(_pokemonData)
    }

    return (
        <div className='main-page-wrapper'>
            {loading
                ? <h3>Loading...</h3>
                : (
                    <>
                        <div>
                            <Button
                                className='btn'
                                onClick={prev}
                                type="primary">Prev</Button>
                            <Button
                                className='btn'
                                onClick={next}
                                type="primary">Next</Button>

                        </div>
                        <div className='all-pokemon-block'>
                            {pokemonData.map((pokemon, i) => {
                                return <PokemonCard
                                    pokemon={pokemon}
                                    key={i}
                                />
                            })}
                        </div>

                    </>
                )
            }
        </div>
    );
};

export default AllPokemonPage;