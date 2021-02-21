import React, {useState} from 'react';
import AppContext from "./AppContext";

const UserState = props => {
    const [open, setOpen] = useState(false);
    return (
        <AppContext.Provider value={{
            open,
            setOpen
        }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default UserState;
