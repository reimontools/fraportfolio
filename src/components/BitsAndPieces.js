import React, { useEffect } from "react";
export default function BitsAndPieces() {
    useEffect(() => {
        document.getElementById("nav-toggle").checked = false;
    }, []);
    return <></>
}