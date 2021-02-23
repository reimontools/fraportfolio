import React from "react";
import AppState from '../context/app/AppState';
import '../styles/app.css';
import Routes from './Routes.jsx';
import ButtonUp from './others/ButtonUp.jsx';

function App() {
    return (
        <AppState>
            <Routes />
            <ButtonUp /> 
        </AppState>
    );
};

export default App;
