import styled from "styled-components";

const ImgStyledFadeIn = styled.img `
    width: 100%;
    animation: fadein 2s;
    @keyframes fadein { 
        from {opacity: 0};
        to {opacity: 1};
    };
`;

const ImageTransition = {
    FadeIn: function FadeIn({src, alt}) {
        return ( 
            <ImgStyledFadeIn src={src} alt={alt} />
        );
    }
};


export default ImageTransition;