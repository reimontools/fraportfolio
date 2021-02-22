import React, {useRef} from "react";
import ModalCarousel from "./ModalCarousel";
import styled from "styled-components";
// import { mediumScreenSize } from "../../config/param.js";

const ImgImageStyled = styled.img `
    width: 100%;
    text-align: center;
    font-family: fontBrandon, sans-serif;
    font-size: 20px;
    color: #ffffff;
    height: 100%;
    object-fit: cover;
`;

const DivTextStyled = styled.div `
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
`;

const DivFotoStyled = styled.div `
    position: relative;
    height: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 1%;
    grid-auto-flow: dense;
`;

const DivCardStyled = styled.div `
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;

    &:hover ${ImgImageStyled} {
        filter: blur(6px);
    };
    &:hover ${DivTextStyled} {
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
`;

const DivImageStyled = styled.div `
    width: 100%;
    text-align: center;
    font-family: fontBrandon, sans-serif;
    font-size: 20px;
    color: #ffffff;
`;

const DivGalleryStyled = styled.div `
    width: auto;
`;

const GalleryOne = (props) => {
    const modalRef = useRef();
    const openModal = (idx, max) => {
        modalRef.current.openModal(idx, max);
    };
    
    return (
        <DivGalleryStyled>
            <DivFotoStyled>
                <ModalCarousel ref={modalRef} images={props.images}/>
                {props.images && props.images.map((image, idx) => (
                    <DivCardStyled onClick={() => openModal(idx, props.images.length - 1)} key={idx}>
                        <ImgImageStyled src={image.portraitImage.asset.url} alt={image.portraitImage.alt} />
                        <DivTextStyled>
                            <DivImageStyled>
                                {image.title}
                            </DivImageStyled>
                        </DivTextStyled>
                    </DivCardStyled>
                ))}
            </DivFotoStyled>
        </DivGalleryStyled>
    );
};

export default GalleryOne;