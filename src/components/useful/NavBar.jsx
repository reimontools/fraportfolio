import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/nav-bar.css';

const NavBar = () => {
    return (
        <div className="menu-container">
            <div className="name-container">
                Francesca<br/>Pusceddu
            </div>
            <div>
                <div className="nav-container">
                    <nav>
                        <ul className="ul-container">
                            <li><NavLink className="nav-link" to="/" activeClassName="nav-link-active" exact>portraits</NavLink></li>                            
                            <li><NavLink className="nav-link" to="/professional" activeClassName="nav-link-active">professional</NavLink></li>
                            <li><NavLink className="nav-link" to="/poster" activeClassName="nav-link-active">poster</NavLink></li>
                            <li><NavLink className="nav-link" to="/picturebooks" activeClassName="nav-link-active">picture books</NavLink></li>
                            <li><NavLink className="nav-link" to="/bitsandpieces" activeClassName="nav-link-active">bits and pieces</NavLink></li>
                            <li><NavLink className="nav-link" to="/about" activeClassName="nav-link-active">about</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;