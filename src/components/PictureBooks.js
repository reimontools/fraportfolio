import React, {useState, useEffect} from "react";
import sanityClient from "../config/client.js";
import GalleryThree from "./useful/GalleryThree";
import Loading from "./useful/Loading.jsx";

export default function PictureBooks() {
    const [portraitsData, setPortraitsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(fetchPortraits, 1500);
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
                : <GalleryThree images={portraitsData}/>
            }
        </>
    );
};