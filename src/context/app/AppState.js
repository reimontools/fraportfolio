import React, {useState} from 'react';
import AppContext from "./AppContext";
import { getLocalStorage, setLocalStorage } from "../../helpers/StoreHelper";

const AppState = props => {
    const [navBarState, setNavBarState] = useState(false);
    const [localParam, setLocalParam] = useState(getLocalStorage);
    const handleLocalParam = (param) => {
        setLocalParam(param);
        setLocalStorage(param);
    };
    return (
        <AppContext.Provider value={{navBarState, setNavBarState, localParam, handleLocalParam}}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
