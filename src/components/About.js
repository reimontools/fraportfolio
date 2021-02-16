import React, { useEffect } from "react";

export default function About() {
    
    useEffect(() => {
        document.getElementById("nav-toggle").checked = false;
    }, []);
    
    return <></>
}