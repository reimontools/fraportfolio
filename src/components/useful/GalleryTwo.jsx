import React from "react";
import styled from "styled-components";

const DivGridStyled = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 15px;
    justify-content: center;
    grid-template-rows: masory;
    img {
        width: 300px;
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, 100%);
        img {
            width: 100%;
        };
    };
`;

const GalleryTwo = (props) => {
    return (
        <DivGridStyled>
            {props.images && props.images.map((image, idx) => (
                <img key={idx} src={image.portraitImage.asset.url} alt={image.portraitImage.alt} />
            ))}
        </DivGridStyled>
    );
};

export default GalleryTwo;