import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { BsArrowUpShort } from "react-icons/bs";

const DivButtonUpStyled = styled.div `
    position: fixed;
    bottom: 3%;
    right: 8%;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: rgb(99, 99, 99);
    border-radius: 50%;
    font-size: 35px;
    transform: ${({ showMe }) => showMe ? 'scale(1)' : 'scale(0)'};
    transition: all 300ms ease;
    cursor: pointer;
`;

const ButtonUp = () => {
    const [showMe, setShowMe] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            const scroll = document.documentElement.scrollTop;
            if (scroll > 100) {
                setShowMe(true);
            } else if (scroll <= 100) {
                setShowMe(false);
            }
        };
    }, []);

    const up = () => {
        setShowMe(false);
        var current = document.documentElement.scrollTop;
        if (current > 0) {
            window.requestAnimationFrame(up);
            window.scrollTo(0, current - (current / 6));
        };
    };
    
    return (
        <DivButtonUpStyled  showMe={ showMe } id="button-up" onClick={() => up()}>
            <BsArrowUpShort />
        </DivButtonUpStyled>
    );
};

export default ButtonUp;
