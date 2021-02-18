import React from 'react'
import styled from "styled-components";
import Logo from './Logo';
import NavBar from './NavBar';
import { mediumScreenSize } from "../../../config/param.js";

const DivHeaderStyled = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    @media screen and (max-width: ${mediumScreenSize}) {
        height: 80px;
    }
`;

const Header = () => {
    
    return (
        <DivHeaderStyled>
            <Logo />
            <NavBar />
        </DivHeaderStyled>
    );
};

export default Header;
