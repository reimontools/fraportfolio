import React, { useState, useContext } from 'react'
import AppContext from "../../context/app/AppContext.js";
import { Option, OptionContainer, IconContainer } from './NavBarStyled.jsx';
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
            <OptionContainer>
                <Option onClick={() => handleNavBar()} to={item.path} activeClassName="active" exact>
                    {item.title}
                </Option>
                <IconContainer>
                    {item.subNav && subNav
                        ? <BsArrowUpShort onClick={() => setSubNav(!subNav)}/>
                        : item.subNav
                        ? <BsArrowDownShort onClick={() => setSubNav(!subNav)}/>
                        : null
                    }
                </IconContainer>
            </OptionContainer>            
            {subNav && item.subNav.map((item, index) => {
                return (
                    <Option className="left" onClick={() => handleNavBar()} key={index} to={item.path} activeClassName="active" exact>
                        {item.title}
                    </Option>
                );
            })}
        </>
    );
};

export default Element;