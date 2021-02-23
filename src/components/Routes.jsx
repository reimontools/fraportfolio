import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './nav/NavBar';
import Portraits from "./views/Portraits";
import Professional from "./views/Professional";
import Poster from "./views/Poster";
import PictureBooks from "./views/PictureBooks";
import BitsAndPieces from "./views/BitsAndPieces";
import About from "./views/About";
import PageNotFound from "./views/PageNotFound";

const Routes = () => {
    return (
        <Router>
            <NavBar />
                <Switch>                        
                    <Route component={Portraits} path='/' exact />
                    <Route component={Professional} path='/professional' />
                    <Route component={Poster} path='/poster' />
                    <Route component={PictureBooks} path='/picturebooks' />
                    <Route component={BitsAndPieces} path='/bitsandpieces' />
                    <Route component={About} path='/about' />
                    <Route component={PageNotFound} />
                </Switch>
        </Router>
    );
};

export default Routes;
