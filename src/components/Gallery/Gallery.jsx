import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Gallery.module.css";
import { useState } from "react";

export default function Gallery({
    images,
    vertical = false,
    infinity = false,
}) {
    const [currentImage, setCurrentImage] = useState(0);

    function onPrevButton() {
        if (infinity && currentImage === 0) {
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }

    function onNextButton() {
        if (infinity && currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }

    return (
        <div className={classes.gallery}>
            {(currentImage !== 0 || infinity) && (
                <div
                    className={
                        vertical ? classes.prevArrowVertical : classes.prevArrow
                    }
                    onClick={() => {
                        onPrevButton();
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            )}

            <img
                className={classes.image}
                src={images[currentImage]}
                alt="gallery-image"
            />

            {(currentImage !== images.length - 1 || infinity) && (
                <div
                    className={
                        vertical ? classes.nextArrowVertical : classes.nextArrow
                    }
                    onClick={() => {
                        onNextButton();
                    }}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            )}
        </div>
    );
}
