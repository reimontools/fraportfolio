import React from "react";
import styled from "styled-components";
import { mediumScreenSize } from "../../config/param.js";

const DivGalleryStyled = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 15px;
    justify-content: center;
    grid-template-rows: masory;
    img {
        width: 300px;
    }

    @media (max-width: ${mediumScreenSize}) {
        grid-template-columns: repeat(auto-fill, 100%);
        img {
            width: 100%;
        };
    };
`;

const GalleryTwo = (props) => {
    return (
        <DivGalleryStyled>
            {props.images && props.images.map((image, idx) => (
                <img key={idx} src={image.portraitImage.asset.url} alt={image.portraitImage.alt} />
            ))}
        </DivGalleryStyled>
    );
};

export default GalleryTwo;