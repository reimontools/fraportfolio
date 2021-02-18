import React from "react";
import styled from "styled-components";
import Routes from './Routes.jsx';
import './styles/app.css';

const DivBodyStyled = styled.div `
    height: 100vh;
    width: 100vw;
`;

function App() {
    return (
        <DivBodyStyled>
            <Routes />
        </DivBodyStyled>
    );
};

export default App;
