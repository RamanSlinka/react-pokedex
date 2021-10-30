import './App.css'
import React from "react";
import AllPokemonPage from "./components/AllPokemonPage";
import NavbarPage from "./components/Navbar";
import {Route, Switch} from "react-router-dom";
import Routes, {PATH} from "./utils/Routes";

function App() {
    return (
        <div className="App">
            <NavbarPage/>
            <Switch>
                <Route exact path={PATH.ALL_POKEMON_PAGE} render={() => <AllPokemonPage/>}/>
                <Routes/>
            </Switch>

        </div>
    );
}

export default App;
