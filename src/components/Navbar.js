import React from 'react';
import 'antd/dist/antd.css'
import {PageHeader} from "antd";

const NavbarPage = () => {
    return (
        <PageHeader

            color="primary"
            className="site-page-header navbar"
            title="Pokedex"
            subTitle="https://pokeapi.co/."
        />
    );
};

export default NavbarPage;