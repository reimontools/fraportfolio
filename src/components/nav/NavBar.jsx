import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import AppContext from "../../context/app/AppContext.js";
import { Logo, Burger, Bar } from './NavElements.jsx';

const NavBar = () => {
    const { open, setOpen } = useContext(AppContext);
    
    const handleNavBar = () => {
        document.getElementsByTagName('body')[0].style.overflow = open ? 'visible' : 'hidden';
        setOpen(!open);
    };

    return (
        <>
            <Logo>Francesca<br/>Pusceddu</Logo>
            <Burger open={ open } onClick={() => handleNavBar()}>
                <div />
                <div />
                <div />
            </Burger>
            <Bar open={ open }>
                <ul>
                    <li><NavLink onClick={() => handleNavBar()} to="/" activeClassName="active" exact>portraits</NavLink></li>                            
                    <li><NavLink onClick={() => handleNavBar()} to="/professional" activeClassName="active">professional</NavLink></li>
                    <li><NavLink onClick={() => handleNavBar()} to="/poster" activeClassName="active">poster</NavLink></li>
                    <li><NavLink onClick={() => handleNavBar()} to="/picturebooks" activeClassName="active">picture books</NavLink></li>
                    <li><NavLink onClick={() => handleNavBar()} to="/bitsandpieces" activeClassName="active">bits and pieces</NavLink></li>
                    <li><NavLink onClick={() => handleNavBar()} to="/about" activeClassName="active">about</NavLink></li>
                </ul>
            </Bar>
        </>
    );
};

export default NavBar;
