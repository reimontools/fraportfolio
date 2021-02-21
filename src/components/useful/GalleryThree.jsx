import React from "react";
import styled from "styled-components";

const GalleryBody = styled.div `
    /* width: auto;
    height: auto; */
    .gallery-container {
        position: relative;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-auto-flow: dense;
        grid-gap: 1%;
    };
    .image-container {
        position: relative;
        overflow: hidden;
        height: 100%;
        width: 100%;
        &:hover img {
            filter: blur(6px);
        };
        &:hover .hover-container {
            opacity: 1;
            visibility: visible;
        };
        &:first-child {
            grid-column-start: span 2;
            grid-row-start: span 2;
        };
        &:nth-child(2n+3) {
            grid-row-start: span 2;
        };
    };
    img {
        width: 100%;
        text-align: center;
        font-family: fontBrandon, sans-serif;
        font-size: 20px;
        color: #ffffff;
        height: 100%;
        object-fit: cover;
    };
    .hover-container {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition: all 300ms ease-out;
        cursor: pointer;
    };
    .text-container {
        width: 100%;
        text-align: center;
        font-family: fontBrandon, sans-serif;
        font-size: 20px;
        color: #ffffff;
    }
`;

const GalleryThree = (props) => {
    return (
        <GalleryBody>
            <div className="gallery-container">
                {props.images && props.images.map((image, idx) => (
                    <div className="image-container" key={idx}>
                        <img src={image.portraitImage.asset.url} alt={image.portraitImage.alt} />
                        <div className="hover-container">
                            <div className="text-container">
                                {image.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </GalleryBody>
    );
};

export default GalleryThree;