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
                <Route component={Professional} path='/professional' exact />
                <Route component={Poster} path='/poster' exact />
                <Route component={PictureBooks} path='/picturebooks' exact />
                <Route component={BitsAndPieces} path='/bitsandpieces' exact />
                <Route component={About} path='/about' exact />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
};

export default Routes;
