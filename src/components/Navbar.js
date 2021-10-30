import React from 'react';
import 'antd/dist/antd.css'
import {PageHeader} from "antd";
import {Link} from "react-router-dom";
import {PATH} from "../utils/Routes";

const NavbarPage = () => {
    return (
        <div>
            <PageHeader
                title="Pokedex"
                subTitle="https://pokeapi.co/."
                extra={<Link className='home-btn'
                             to={PATH.ALL_POKEMON_PAGE}>
                    Home</Link>}
            />

        </div>
    );
};

export default NavbarPage;