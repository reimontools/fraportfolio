import React from 'react'
import styled from "styled-components";
import { mediumScreenSize } from "../../../config/param.js";

const DivLogoStyled = styled.div `
    font-family: fontAliens;
    font-size: 40px;
    letter-spacing: 3px;
    color: rgb(99, 99, 99);
    padding-left: 3%;
    width: auto;

    @media screen and (max-width: ${mediumScreenSize}) {
        font-size: 30px;
        letter-spacing: 3px;
    }
`;

const Logo = () => {
    return (
        <DivLogoStyled>
            Francesca<br/>Pusceddu
        </DivLogoStyled>
    );
};

export default Logo;
