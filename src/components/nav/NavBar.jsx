import React, { useContext } from 'react'
import AppContext from "../../context/app/AppContext.js";
import { navElements } from "../../config/param.js";
import { Logo, Burger, Bar } from './NavBarStyled.jsx';
import Element from './Element.jsx';


const NavBar = () => {
    const { navBarState, setNavBarState, logoState, updLogoState } = useContext(AppContext);

    const handleNavBar = () => {
        document.getElementsByTagName('body')[0].style.overflow = navBarState ? 'visible' : 'hidden';
        setNavBarState(!navBarState);
    };    

    return (
        <>
            <Logo autoHide={ logoState } onClick={() => updLogoState()}>Francesca<br/>Pusceddu</Logo>
            <Burger open={ navBarState } autoHide={ logoState } onClick={() => handleNavBar()}>
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
