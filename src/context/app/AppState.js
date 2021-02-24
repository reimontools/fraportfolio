import React, {useState} from 'react';
import AppContext from "./AppContext";

const AppState = props => {
    const [navBarState, setNavBarState] = useState(false);
    return (
        <AppContext.Provider value={{navBarState, setNavBarState}}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
