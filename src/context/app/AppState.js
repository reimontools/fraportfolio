import React, {useState} from 'react';
import AppContext from "./AppContext";
import { readLocalStorage, writeLocalStorage } from "../../helpers/StoreHelper";

const AppState = props => {
    const [navBarState, setNavBarState] = useState(false);
    const [logoState, setLogoState] = useState(readLocalStorage());

    const updLogoState = () => {
        writeLocalStorage(!logoState);
        setLogoState(!logoState);
    };

    return (
        <AppContext.Provider value={{navBarState, setNavBarState, logoState, updLogoState}}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
