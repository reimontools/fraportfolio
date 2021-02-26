import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './nav/NavBar';
import Portraits from "./views/Portraits";
import Professional from "./views/Professional";
import Poster from "./views/Poster";
import PictureBooks from "./views/PictureBooks";
import BitsAndPieces from "./views/BitsAndPieces";
import About from "./views/About";
import PageNotFound from "./views/PageNotFound";
import { PageContainer } from './nav/NavBarStyled';

const Routes = () => {
    return (
        <Router>
            <NavBar />
            <Switch>  
                <PageContainer className="page-container">                      
                    <Route component={Portraits} path='/' exact />
                    <Route component={Professional} path='/professional' exact />
                    <Route component={Poster} path='/poster' exact />
                    <Route component={PictureBooks} path='/picturebooks' exact />
                    <Route component={BitsAndPieces} path='/bitsandpieces' exact />
                    <Route component={About} path='/about' exact />
                </PageContainer>
            </Switch>
        </Router>
    );
};

export default Routes;
