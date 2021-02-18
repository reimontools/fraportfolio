import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediumScreenSize } from "../../../config/param.js";

const NavOptionsStyled = styled.nav `
    position: fixed;
    height: 100vh;
    width: 15%;
    left: 5%;
    bottom: 0;
    ul {
        list-style: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    li {
        padding-bottom: 10px;
    }
    a {
        font-family: fontBrandon, sans-serif;
        font-size: 14px;
        font-weight: bolder;
        color: rgb(55, 55, 55);
        text-decoration: none;
    }
    a:hover {
        color: rgb(186, 218, 85);
    }
    .active {
        color: rgb(186, 218, 85);
    }

    @media (max-width: ${mediumScreenSize}) {
        width: 100vw;
        left: 0;
        overflow: hidden;
        transition: all .5s ease-in-out;
        bottom: ${({ open }) => open ? '0' : '100%'};
        ul {
            padding: 0;
            height: 100vh;
            align-items: center;
            justify-content: space-evenly;
        }   
    }
`;

const Options = ({ open }) => {
    return (
        <>
            <NavOptionsStyled open={ open }>
                <ul>
                    <li><NavLink to="/" activeClassName="active" exact>portraits</NavLink></li>                            
                    <li><NavLink to="/professional" activeClassName="active">professional</NavLink></li>
                    <li><NavLink to="/poster" activeClassName="active">poster</NavLink></li>
                    <li><NavLink to="/picturebooks" activeClassName="active">picture books</NavLink></li>
                    <li><NavLink to="/bitsandpieces" activeClassName="active">bits and pieces</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">about</NavLink></li>
                </ul>
            </NavOptionsStyled>
        </>
    );
};

export default Options;
