import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import styled from "styled-components";

import Header from './components/useful/Nav/Header.jsx';
import Portraits from "./components/Portraits";
import Professional from "./components/Professional";
import Poster from "./components/Poster";
import PictureBooks from "./components/PictureBooks";
import BitsAndPieces from "./components/BitsAndPieces";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import { mediumScreenSize } from "./config/param.js";

const DivRoutesStyled = styled.div `
    position: relative;
    height: 100%;
    width: 80%;
    left: 20%;
    display: flex;
    justify-content: center; 
    align-content: center;

    @media (max-width: ${mediumScreenSize}) {
        width: 100%;
        left: 0;
    };

`;

const DivMainPageStyled = styled.div `
    width: 70%;
    height: 100%;
    /* border: 1px red solid; */
    @media (max-width: ${mediumScreenSize}) {
        width: 100%;
    };
`;

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <DivRoutesStyled>
                <DivMainPageStyled>
                    <Switch>                        
                        <Route component={Portraits} path='/' exact />
                        <Route component={Professional} path='/professional' />
                        <Route component={Poster} path='/poster' />
                        <Route component={PictureBooks} path='/picturebooks' />
                        <Route component={BitsAndPieces} path='/bitsandpieces' />
                        <Route component={About} path='/about' />
                        <Route component={PageNotFound} />
                    </Switch>
                </DivMainPageStyled>
            </DivRoutesStyled>
        </BrowserRouter>
    );
};

export default Routes;
