import React from "react";
import AppState from './context/app/AppState';
import './styles/app.css';
import styled from "styled-components";
import Routes from './Routes.jsx';
import Logo from './components/useful/Nav/Logo.jsx';
import Burger from './components/useful/Nav/Burger.jsx';
import ButtonUp from './components/useful/ButtonUp.jsx';

const DivBodyStyled = styled.div `
    height: 100vh;
    width: 100vw;
`;

function App() {
    return (
        <AppState>
            <DivBodyStyled>
                <Logo />
                <Burger />
                <Routes />
                <ButtonUp />
            </DivBodyStyled>
        </AppState>
    );
};

export default App;
