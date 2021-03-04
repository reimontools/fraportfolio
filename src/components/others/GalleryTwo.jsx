import React, {useRef} from "react";
import styled from "styled-components";
import { SMALL_SCREEN_SIZE, MEDIUM_SCREEN_SIZE, SMALL_SCREEN_SIZE_PX, MEDIUM_SCREEN_SIZE_PX } from "../../helpers/ParamHelper"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { ModalCarousel } from "../components";

// const resMode = {350: 1, 750: 2, 900: 3};
const resSize = {[SMALL_SCREEN_SIZE]: 1, [MEDIUM_SCREEN_SIZE]: 3};
    
const DivGalleryTwoStyled = styled.div `
    img {
        width: 100%;
        display: block; 
    };
    .text-container {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        visibility: hidden;
        transition: all 300ms ease-out;
        opacity: 0;
        text-align: center;
        font-family: fontBrandon, sans-serif;
        font-size: 20px;
        color: #ffffff; 
    }
    .img-container {
        position: relative;
    }
    @media (min-width: ${MEDIUM_SCREEN_SIZE_PX}) {
        .img-container {
            cursor: zoom-in;
            &:hover img {
                filter: blur(6px);
            };
            &:hover .text-container {
                opacity: 1;
                visibility: visible;
            };
        };
    };
`;

const GalleryTwo = (props) => {
    const modalRef = useRef();
    const openModal = (idx, max) => {
        modalRef.current.openModal(idx, max);
    };
    return (
        <DivGalleryTwoStyled>
            <ModalCarousel ref={modalRef} images={props.images}/>
            <ResponsiveMasonry columnsCountBreakPoints={resSize}>
                <Masonry gutter="10px">
                    {props.images && props.images.map((image, idx) => (
                        <div key={idx} className="img-container" onClick={() => openModal(idx, props.images.length - 1)}>
                            <img src={image.portraitImage.asset.url} alt={image.portraitImage.alt} />
                            <div className="text-container">{image.title}</div>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </DivGalleryTwoStyled>
    );
};

export default GalleryTwo;