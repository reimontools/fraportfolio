import React, { useState, useEffect, useRef } from "react";
import sanityClient from "../config/client.js";
import '../styles/style.css';

import ModalCarousel from "./useful/ModalCarousel";

export default function Portraits() {
    const [portraitsData, setPortraitsData] = useState(null);
    const modalRef = useRef()

    const openModal = (index, max) => {
        modalRef.current.openModal(index, max)
    };

    useEffect(() => {
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
                }
            }`)
            .then((data) => {
                setPortraitsData(data);
            })
            .catch(console.error)
    }, []);

    return (
        <div className="gallery">
            <ModalCarousel ref={modalRef} imagenes={portraitsData}/>
            <div className="photo-container">
                {portraitsData && portraitsData.map((portrait, index) => (
                    <div 
                        onClick={() => openModal(index, portraitsData.length - 1)} 
                        className="card-container" key={index}>
                        <img 
                            className="image-container" 
                            src={portrait.portraitImage.asset.url} 
                            alt={portrait.portraitImage.alt} 
                        />
                        <div className="text-container">
                            <div className="image-name-container">
                                {portrait.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};