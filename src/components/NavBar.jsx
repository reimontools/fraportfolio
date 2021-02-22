import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import AppContext from "../context/app/AppContext.js";
import { Logo, Burger, Bar } from './NavElements.jsx';

const NavBar = () => {
    const { open, setOpen } = useContext(AppContext);
    const change = () => {
        if(open) {
            document.getElementsByTagName('body')[0].style.overflow = 'visible';
        } else {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        }
        setOpen(!open);
    }
    return (
        <>
            <Logo>Francesca<br/>Pusceddu</Logo>
            <Burger open={ open } onClick={() => change()}>
                <div />
                <div />
                <div />
            </Burger>
            <Bar open={ open }>
                <ul>
                    <li><NavLink onClick={() => change()} to="/" activeClassName="active" exact>portraits</NavLink></li>                            
                    <li><NavLink onClick={() => change()} to="/professional" activeClassName="active">professional</NavLink></li>
                    <li><NavLink onClick={() => change()} to="/poster" activeClassName="active">poster</NavLink></li>
                    <li><NavLink onClick={() => change()} to="/picturebooks" activeClassName="active">picture books</NavLink></li>
                    <li><NavLink onClick={() => change()} to="/bitsandpieces" activeClassName="active">bits and pieces</NavLink></li>
                    <li><NavLink onClick={() => change()} to="/about" activeClassName="active">about</NavLink></li>
                </ul>
            </Bar>
        </>
    );
};

export default NavBar;
