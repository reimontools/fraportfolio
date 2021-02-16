import React, { useEffect } from "react";
export default function Poster() {
    useEffect(() => {
        document.getElementById("nav-toggle").checked = false;
    }, []);
    return <></>
}