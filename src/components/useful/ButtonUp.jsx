import React, { useEffect } from "react";
import styled from "styled-components";
import { mediumScreenSize } from "../../config/param.js";
import { BsChevronUp } from "react-icons/bs";

const DivButtonUpStyled = styled.div `
    width: 40px;
    height: 40px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(99, 99, 99);
    border-radius: 50%;
    font-size: 20px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    /*border: 1px solid transparent;*/
    transition: all 300ms ease;
    transform: scale(0);
    &:hover {
        transform: scale(1.1);
        /* border-color: rgba(0, 0, 0, 0.1); */
    }
    @media screen and (max-width: ${mediumScreenSize}) {
        /* font-size: 30px;
        letter-spacing: 3px; */
    }
`;

const ButtonUp = () => {

    useEffect(() => {
        const buttonUp = document.getElementById("button-up");
        window.onscroll = () => {
            const scroll = document.documentElement.scrollTop;
            if (scroll > 100) {
                buttonUp.style.transform = "scale(1)";
            } else if (scroll <= 100) {
                buttonUp.style.transform = "scale(0)";
            }
        };
    }, []);

    const irArriba = () => {
        const buttonUp = document.getElementById("button-up");
        var current = document.documentElement.scrollTop;
        if (current > 0) {
            window.requestAnimationFrame(irArriba);
            window.scrollTo(0, current - (current / 10));
            buttonUp.style.transform = "scale(0)";
        };
    };

    return (
        <DivButtonUpStyled id="button-up" onClick={() => irArriba()}>
            <BsChevronUp />
        </DivButtonUpStyled>
    );
};

export default ButtonUp;
