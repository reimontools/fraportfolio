import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import styled from "styled-components";
import { mediumScreenSize } from "./config/param.js";

import Bar from './components/useful/Nav/Bar.jsx';

import Portraits from "./components/Portraits";
import Professional from "./components/Professional";
import Poster from "./components/Poster";
import PictureBooks from "./components/PictureBooks";
import BitsAndPieces from "./components/BitsAndPieces";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";

// const DivRoutesStyled = styled.div `
//     position: relative;
//     height: auto;
//     width: 80%;
//     left: 20%;
//     display: flex;
//     justify-content: center; 
//     align-content: center;
//     @media (max-width: ${mediumScreenSize}) {
//         width: auto;
//         left: 0;
//     };
// `;

const DivRoutesStyled = styled.div `
    height: auto;
    left: 25%;
    position: relative;
    width: 65%;
    /* border: 1px red solid; */
    @media (max-width: ${mediumScreenSize}) {
        width: auto;
        left: 0;
    };
`;

const Routes = () => {
    return (
        <BrowserRouter>
            {/* <Bar /> */}
            <DivRoutesStyled>
                <Switch>                        
                    <Route component={Portraits} path='/' exact />
                    <Route component={Professional} path='/professional' />
                    <Route component={Poster} path='/poster' />
                    <Route component={PictureBooks} path='/picturebooks' />
                    <Route component={BitsAndPieces} path='/bitsandpieces' />
                    <Route component={About} path='/about' />
                    <Route component={PageNotFound} />
                </Switch>
            </DivRoutesStyled>
        </BrowserRouter>
    );
};

export default Routes;
