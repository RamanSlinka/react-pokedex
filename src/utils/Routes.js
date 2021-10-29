import React from 'react';
import {Route, Switch} from "react-router-dom";
import PokemonDescription from "../components/PokemonCard/PokemonDescription";

export const PATH = {
    POKEMON_DESCRIPTION: '/pokemon/',
}




const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={PATH.POKEMON_DESCRIPTION} exact render={() => <PokemonDescription/>}/>
            </Switch>
        </div>
    );
};

export default Routes;