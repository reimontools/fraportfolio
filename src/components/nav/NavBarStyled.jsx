
import styled from "styled-components";
import { mediumScreenSizePx } from "../../helpers/ParamHelper.js";
import { NavLink } from "react-router-dom";

/*LOGO#####################################################*/
export const Logo = styled.div `
    position: fixed;
    left: 3%;
    top: 2%;
    z-index: 500;
    display: ${({ open }) => open ? "none" : "block"};
    width: auto;
    font-family: fontAliens;
    font-size: 40px;
    letter-spacing: 3px;
    color: rgb(99, 99, 99);
    cursor: pointer;
    @media screen and (max-width: ${mediumScreenSizePx}) {
        position: ${({ autoHide }) => autoHide ? "absolute" : "fixed"};
        font-size: 30px;
        letter-spacing: 3px;
    };
`;

/*BURGER##################################################*/
export const Burger = styled.div `
    display: none;
    @media screen and (max-width: ${mediumScreenSizePx}) {
        display: block;
        position: ${({ autoHide }) => autoHide ? "absolute" : "fixed"};
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

/*BAR#####################################################*/
export const Bar = styled.nav `
    position: fixed;
    width: 15%;
    height: 100%;
    left: 5%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index:600;
    .active {
        color: rgb(186, 218, 85);
    };
    .left {
        padding-left: 20px;
    };
    @media screen and (max-width: ${mediumScreenSizePx}) {
        .left {
            padding-left: 0;
        };
        width: 100%;
        left: 0;
        background-color: white;
        bottom: ${({ open }) => open ? '0' : '100%'};
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden; 
        transition: all .5s ease-in-out;
    };
`;

/*LINKCONTAINER##################################################*/
export const OptionContainer = styled.div `
    width: 100%; 
    display: flex;
    align-items: center;
`;

/*OPTION#####################################################*/
export const Option = styled(NavLink)`
    margin: 0;
    font-family: fontBrandon, sans-serif;
    font-size: 14px;
    font-weight: bolder;
    color: rgb(55, 55, 55);
    text-decoration: none;
    padding-bottom: 13px;
    display: flex;
    &:hover {
       color: rgb(186, 218, 85);
    };
    @media screen and (max-width: ${mediumScreenSizePx}) {
        margin: 0px auto;
    };
`;

/*ICONCONTAINER##################################################*/
export const IconContainer = styled.div `
    position: absolute; 
    right: 25%; 
    font-size: 25px;
`;

/*PAGECONTAINER##################################################*/
export const PageContainer = styled.div `
    position: relative;
    left: 25%;
    width: 65%;
    height: auto;
    /* border: 1px red solid; */
    @media screen and (max-width: ${mediumScreenSizePx}) {
        width: auto;
        left: 0;
    };
`;