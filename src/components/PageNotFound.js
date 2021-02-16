import React, { useEffect } from "react";
export default function PageNotFound() {
    useEffect(() => {
        document.getElementById("nav-toggle").checked = false;
    }, []);
    return <></>
}