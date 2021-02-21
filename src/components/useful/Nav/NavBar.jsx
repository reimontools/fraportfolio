import React, { useContext } from 'react'
import styled from "styled-components";
import Options from './Options';
import { mediumScreenSize } from "../../../config/param.js";
import AppContext from "../../../context/app/AppContext.js";

const DivBurgerStyled = styled.div `
    display: none;
    @media (max-width: ${mediumScreenSize}) {
        display: block;
        position: fixed;
        right: 3%;
        top: 2%;
        transform: translateY(100%);
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

const NavBar = () => {
    const { open, setOpen } = useContext(AppContext);
    return (
        <>
            <DivBurgerStyled open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </DivBurgerStyled >
            <Options />
        </>
    );
};

export default NavBar;
