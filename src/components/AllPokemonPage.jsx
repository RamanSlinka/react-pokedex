import React, {useEffect, useState} from 'react';
import {getAllPokemon, getPokemon} from "../utils/pokemon";
import PokemonCard from "./PokemonCard/PokemonCard";

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
            console.log(response)
            let pokemon = await loadingPokemon(response.results)
            console.log(pokemon)
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
        if(!prevUrl) return;
        setLoading(true);
        let data = await getAllPokemon(prevUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous);
        setLoading(false)
    }



    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord
        }))

        setPokemonData(_pokemonData)
    }

    console.log(pokemonData)
    return (
        <div>
            {loading
                ? <h3>Loading...</h3>
                : (
                    <>
                    <div>
                        <button onClick={prev}>Prev</button>
                        <button onClick={next}>Next</button>
                    </div>
                    <div>
                        {pokemonData.map((pokemon, i) => {
                            return <PokemonCard
                                pokemon={pokemon}
                                key={i}
                            />
                        })}
                    </div>
                        <div>
                            <button onClick={prev}>Prev</button>
                            <button onClick={next}>Next</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default AllPokemonPage;