import React, { useState, useContext } from 'react'
import AppContext from "../../context/app/AppContext.js";
import { navElements } from "../../config/param.js";
import { Logo, Burger, Bar } from './NavBarStyled.jsx';
import Element from './Element.jsx';

const NavBar = () => {
    const { navBarState, setNavBarState } = useContext(AppContext);
    
    const handleNavBar = () => {
        document.getElementsByTagName('body')[0].style.overflow = navBarState ? 'visible' : 'hidden';
        setNavBarState(!navBarState);
    };
    
    return (
        <>
            <Logo>Francesca<br/>Pusceddu</Logo>
            <Burger open={ navBarState } onClick={() => handleNavBar()}>
                <div />
                <div />
                <div />
            </Burger>
            <Bar open={ navBarState }>
                {navElements.map((item, index) => {
                    return <Element item={item} key={index}/>;
                })}
            </Bar>
        </>
    );
};

export default NavBar;
