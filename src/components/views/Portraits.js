import { useState, useEffect } from "react";
import sanityClient from "../../config/client.js";
import GalleryTwo from "../others/GalleryTwo";
import Loading from "../others/Loading.jsx";

const Portraits = () => {
    const [portraitsData, setPortraitsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(fetchPortraits, 500);
    }, []);

    const fetchPortraits = async () => {
        await sanityClient
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
                : <GalleryTwo images={portraitsData}/>
            }
        </>
    );
};

export default Portraits;