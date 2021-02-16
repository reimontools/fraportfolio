import React, {useRef} from "react";
import ModalCarousel from "./ModalCarousel";
import '../../styles/gallery-one.css';

const GalleryOne = (props) => {
    const modalRef = useRef();
    const openModal = (idx, max) => {
        modalRef.current.openModal(idx, max);
    };
    
    return (
        <div className="gallery">
            <ModalCarousel ref={modalRef} images={props.images}/>
            <div className="photo-container">
                {props.images && props.images.map((image, idx) => (
                    <div onClick={() => openModal(idx, props.images.length - 1)} className="card-container" key={idx}>
                        <img className="image-container" src={image.portraitImage.asset.url} alt={image.portraitImage.alt} />
                        <div className="text-container">
                            <div className="image-name-container">{image.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryOne;