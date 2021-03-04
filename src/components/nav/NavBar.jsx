import React, { useContext } from 'react'
import { AppContext } from "../../store/AppProvider";
import { NAV_ELEMENTS } from "../../helpers/ParamHelper.js";
import { Logo, Burger, Bar } from './NavBarStyled.jsx';
import Element from './Element.jsx';


const NavBar = () => {
    const { barState, setBarState, logoState, updLogoState } = useContext(AppContext);

    const handleNavBar = () => {
        document.getElementsByTagName('body')[0].style.overflow = barState ? 'visible' : 'hidden';
        setBarState(!barState);
    };    

    return (
        <>
            <Logo open={ barState } autoHide={ logoState } onClick={() => updLogoState()}>Francesca<br/>Pusceddu</Logo>
            <Burger open={ barState } autoHide={ logoState } onClick={() => handleNavBar()}>
                <div />
                <div />
                <div />
            </Burger>
            <Bar open={ barState }>
                {NAV_ELEMENTS.map((item, index) => {
                    return <Element item={item} key={index}/>;
                })}
            </Bar>
        </>
    );
};

export default NavBar;
