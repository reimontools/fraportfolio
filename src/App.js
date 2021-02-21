import React from "react";
import styled from "styled-components";
import Routes from './Routes.jsx';
import './styles/app.css';

import AppState from './context/app/AppState';

const DivBodyStyled = styled.div `
    height: 100vh;
    width: 100vw;
`;

function App() {
    return (
        <AppState>
            <DivBodyStyled>
                <Routes />
            </DivBodyStyled>
        </AppState>
    );
};

export default App;
