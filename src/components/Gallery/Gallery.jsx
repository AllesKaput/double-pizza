import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Gallery.module.css";
import useSize from "../../hooks/useSize";

const WIDTH_DEFAULT_HORIZONTAL = 800;
const HEIGHT_DEFAULT_HORIZONTAL = 400;
const WIDTH_DEFAULT_VERTICAL = 400;
const HEIGHT_DEFAULT_VERTICAL = 600;

export default function Gallery({
    images,
    vertical = false,
    infinity = false,
    width,
    height,
    controlStyle = {},
    currentImage,
    setCurrentImage,
}) {
    const screenWidth = useSize();

    // если был передан пропс ширины/высоты, то устанавливаем её, иначе дефолтные значения
    const defaultWidth = vertical
        ? width || WIDTH_DEFAULT_VERTICAL
        : width || WIDTH_DEFAULT_HORIZONTAL;
    const defaultHeight = vertical
        ? height || HEIGHT_DEFAULT_VERTICAL
        : height || HEIGHT_DEFAULT_HORIZONTAL;

    // const [currentImage, setCurrentImage] = useState(0);

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

    // адаптивность картинок --------------------------------------------------

    // своеобразное "отношение" высоты и ширины к ширине вьюпорта
    const ratio = defaultWidth / screenWidth;
    const imageWidth = screenWidth < defaultWidth ? screenWidth : defaultWidth;
    const imageHeight =
        screenWidth < defaultWidth ? defaultHeight / ratio : defaultHeight;

    const imageStyle = {
        width: imageWidth,
        height: imageHeight,
    };

    // адаптивность картинок / --------------------------------------------------

    return (
        <div className={classes.gallery}>
            {(currentImage !== 0 || infinity) && (
                <div
                    style={controlStyle}
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
                style={imageStyle}
                className={classes.image}
                src={images[currentImage]}
                alt="gallery-image"
            />

            {(currentImage !== images.length - 1 || infinity) && (
                <div
                    style={controlStyle}
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
