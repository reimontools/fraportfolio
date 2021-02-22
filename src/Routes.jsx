import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import Portraits from "./components/views/Portraits";
import Professional from "./components/views/Professional";
import Poster from "./components/views/Poster";
import PictureBooks from "./components/views/PictureBooks";
import BitsAndPieces from "./components/views/BitsAndPieces";
import About from "./components/views/About";
import PageNotFound from "./components/views/PageNotFound";

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
