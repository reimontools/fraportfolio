import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ButtonIcon } from "../../component";

const Overlay = styled.div `
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .7s ease;
`;

const SlideShow = styled.div `
    width: 95%;
    height: 75%;
    background-color: rgba(255, 255, 255, .9);
    color: #000;
    position: relative;
    display: flex;
    justify-content: center;
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    };
`;

const Imagetext = styled.div `
    font-family: fontBrandon;
    font-weight: bolder;
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    position: absolute;
    color: rgba(0, 0, 0, .7);
    top: 101%;
`;

const ModalCarousel = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(false);
    const [index, setIndex] = useState(0);
    const [max, setMax] = useState(0);
    const [fullScreen, setfullScreen] = useState(false);

    useEffect(() => {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }, []);

    useImperativeHandle(ref, () => {
        return {
            openModal: (index, max) => open(index, max),
            closeModal: () => close()
        };
    });

    const open = (index, max) => {
        setIndex(index);
        setMax(max);
        setDisplay(true);
    };

    const expand = () => {
        if (document.fullscreenElement) {
            setfullScreen(false);
            document.exitFullscreen();
        } else {
            setfullScreen(true);
            document.documentElement.requestFullscreen().catch((e) => {
                setfullScreen(false);
                console.log(e);
            });
        };
    };

    const close = () => {
        if (document.fullscreenElement) {
            setfullScreen(false);
            document.exitFullscreen();
        }
        setDisplay(false);
    };

    const right = () => {
        if (index === max) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        };
    };

    const left = () => {
        if (index === 0) {
            setIndex(max);
        } else {
            setIndex(index - 1);
        };
    };

    if (display) {
        return ReactDOM.createPortal(
            <Overlay>
                <SlideShow>
                    {fullScreen
                        ? <ButtonIcon.Contract action={expand}/>
                        : <ButtonIcon.Expand action={expand}/>
                    }
                    <ButtonIcon.Close action={close}/>
                    <ButtonIcon.Left action={left}/>
                    <ButtonIcon.Right action={right}/>
                    <img src={props.images[index].portraitImage.asset.url} alt={props.images[index].portraitImage.alt}></img> 
                    <Imagetext>{props.images[index].title}</Imagetext>
                </SlideShow>
            </Overlay>, document.getElementById("modal-root")
        );
    };
    return null;
});

export default ModalCarousel;