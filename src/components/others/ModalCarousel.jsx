import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import ReactDOM from "react-dom";
import '../../styles/modal-carousel.css';
import { BsChevronLeft, BsChevronRight, BsX, BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs"; //https://react-icons.github.io/react-icons/

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

    const foward = () => {
        if (index === max) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        };
    }

    const back = () => {
        if (index === 0) {
            setIndex(max);
        } else {
            setIndex(index - 1);
        };
    };

    if (display) {
        return ReactDOM.createPortal(
            <div className="overlay">
                <div className="slideshow">
                    <div onClick={expand} className="btn-icon expand">
                        {fullScreen
                            ? <BsArrowsAngleContract />
                            : <BsArrowsAngleExpand />
                        }
                    </div>
                    <div onClick={close} className="btn-icon close">
                        <BsX className="expand-effect"/>
                    </div>
                    <div onClick={back} className="btn-icon back">
                        <BsChevronLeft className="expand-effect"/>
                    </div>
                    <div onClick={foward} className="btn-icon forward">
                        <BsChevronRight className="expand-effect"/>
                    </div>
                    <img src={props.images[index].portraitImage.asset.url} alt={props.images[index].portraitImage.alt}></img> 
                    <div className="image-name">{props.images[index].title}</div>
                </div>
            </div>, document.getElementById("modal-root")
        );
    };
    return null;
});

export default ModalCarousel;