import React, { useState, useEffect } from "react";
import sanityClient from "../config/client.js";
import GalleryOne from "./useful/GalleryOne";
import Loading from "./useful/Loading.jsx";

export default function Portraits() {
    const [portraitsData, setPortraitsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(fetchPortraits, 300);
    }, []);

    const fetchPortraits = async () => {
        sanityClient
            .fetch(`*[_type == "portraits"] | order(location asc) {
                location,
                title,
                portraitImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }}`)
            .then((data) => {setPortraitsData(data)})
            .catch(console.error);
        setLoading(false);
    };

    return (
        <>
            {loading 
                ? <Loading/>
                : <GalleryOne images={portraitsData}/>
            }
        </>
    );
};