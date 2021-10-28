import React, {useEffect, useState} from 'react';
import {getAllPokemon} from "../utils/pokemon";

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
        }
        fetchData();
    }, [])

    return (
        <div>
            {loading
                ? <h3>Loading...</h3>
                : <h3>Data is fetched</h3>
            }
        </div>
    );
};

export default AllPokemonPage;