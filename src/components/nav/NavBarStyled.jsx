import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediumScreenSize } from "../../config/param.js";

/*LOGO#####################################################*/
export const Logo = styled.div `
    position: fixed;
    left: 3%;
    top: 2%;
    z-index: 500;
    width: auto;
    font-family: fontAliens;
    font-size: 40px;
    letter-spacing: 3px;
    color: rgb(99, 99, 99);

    @media screen and (max-width: ${mediumScreenSize}) {
        position: fixed;
        font-size: 30px;
        letter-spacing: 3px;
    };
`;

/*BURGER##################################################*/
export const Burger = styled.div `
    display: none;
    @media (max-width: ${mediumScreenSize}) {
        display: block;
        position: fixed;
        right: 3%;
        top: 2%;
        padding: 15px 0 15px 15px;
        transform: translateY(15%);
        z-index: 1000;
        width: auto;
        cursor: pointer;
        div {
            width: 25px;
            height: 3px;
            background-color: rgb(99, 99, 99);
            margin: 3px;
            border-radius: 5px;
            transition: all .3s ease-in-out;
            &:nth-child(1) {
                transform: ${({ open }) => open ? 'translateY(6px) rotate(225deg)' : 'translateY(0) rotate(0)'};
            };
            &:nth-child(2) {
                opacity: ${({ open }) => open ? 0 : 1};
            };
            &:nth-child(3) {
                transform: ${({ open }) => open ? 'translateY(-6px) rotate(-225deg)' : 'translateY(0) rotate(0)'};
            };
        };
    };
`;

/*LINKS#####################################################*/
export const Links = styled(NavLink)`
    font-family: fontBrandon, sans-serif;
    font-size: 14px;
    font-weight: bolder;
    color: rgb(55, 55, 55);
    text-decoration: none;
    padding-bottom: 13px;
    
    &:hover {
        color: rgb(186, 218, 85);
    };
`;

/*LINKS#####################################################*/
export const Links2 = styled(NavLink)`
    font-family: fontBrandon, sans-serif;
    font-size: 14px;
    font-weight: bolder;
    color: rgb(55, 55, 55);
    text-decoration: none;
    padding-bottom: 13px;
    /* padding-left: 13px; */
    &:hover {
        color: rgb(186, 218, 85);
    };
`;

/*BAR#####################################################*/
export const Bar = styled.nav `
    position: fixed;
    width: 15%;
    height: 100%;
    left: 5%;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index:600;
    .active {
        color: rgb(186, 218, 85);
    }

    @media (max-width: ${mediumScreenSize}) {
        width: 100%;
        left: 0;
        background-color: white;
        display: ${({ open }) => open ? 'flex' : 'none'};
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden; 
    };
`;