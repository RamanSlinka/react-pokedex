import React from 'react';
import {Route, Switch} from "react-router-dom";
import PokemonDescription from "../components/PokemonCard/PokemonDescription";
import AllPokemonPage from "../components/AllPokemonPage";

export const PATH = {
    POKEMON_DESCRIPTION: '/pokemon/',
    ALL_POKEMON_PAGE: '/'

}


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={PATH.POKEMON_DESCRIPTION} render={() => <PokemonDescription/>}/>
                <Route path={PATH.ALL_POKEMON_PAGE} render={() => <AllPokemonPage/>}/>
            </Switch>
        </div>
    );
};

export default Routes;