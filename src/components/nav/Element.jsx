import React, { useState, useContext } from 'react'
import AppContext from "../../context/app/AppContext.js";
import { Links, Links2 } from './NavBarStyled.jsx';
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { mediumScreenSize } from "../../config/param.js";

const Element = ({ item }) => {
    const [subNav, setSubNav] = useState(false);
    const { setNavBarState } = useContext(AppContext);

    const handleNavBar = () => {
        setNavBarState(false);
        if (window.screen.width <= mediumScreenSize) {
            document.getElementsByTagName('body')[0].style.overflow = 'visible';
        };
    };

    return (
        <>
            <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                <Links onClick={() => handleNavBar()} to={item.path} activeClassName="active" exact>
                    {item.title}
                </Links>
                <div style={{position: "absolute", right:"25%", fontSize:"25px"}}>
                    {item.subNav && subNav
                        ? <BsArrowUpShort onClick={() => setSubNav(!subNav)}/>
                        : item.subNav
                        ? <BsArrowDownShort onClick={() => setSubNav(!subNav)}/>
                        : null
                    }
                </div>
            </div>            
            {subNav && item.subNav.map((item, index) => {
                return (
                    <Links2 onClick={() => handleNavBar()} key={index} to={item.path} activeClassName="active" exact>
                        {item.title}
                    </Links2>
                );
            })}    
        </>
    );
};

export default Element;