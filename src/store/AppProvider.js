import {createContext, useState} from 'react';
import { readLocalStorage, writeLocalStorage } from "../helpers/LocalStorageHelper";

const AppContext = createContext();

const AppState = ({children}) => {
    const [barState, setBarState] = useState(false);
    const [logoState, setLogoState] = useState(readLocalStorage());

    const updLogoState = () => {
        writeLocalStorage(!logoState);
        setLogoState(!logoState);
    };

    return (
        <AppContext.Provider value={{barState, setBarState, logoState, updLogoState}}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext };
export default AppState;
