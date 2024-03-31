import { useMemo, useState } from "react";
import classes from "./Content.module.css";
import Gallery from "../Gallery/Gallery";

export default function Content({ currentData }) {
    const pizzaImages = useMemo(() => {
        return currentData.map((el) => el.photo);
    }, []);

    const [currentLeftImage, setCurrentLeftImage] = useState(0);
    const [currentRightImage, setCurrentRightImage] = useState(0);

    const controlStyle = {
        leftPart: {
            left: "50%",
        },
        rightPart: {
            // позиционируется также от левой части,
            // потому что изначально позиционировалась от неё,
            // и имеет трансформацию относительно левой части
            left: "75%",
        },
    };

    return (
        <div className={classes.contentBlock}>
            {/* <div className={classes.contentContainer}> */}
                <div className={classes.galleries}>
                    <div className={classes.leftPart}>
                        <p className={classes.galleryTitle}>{currentData[currentLeftImage].title}</p>
                        <p className={classes.galleryDescription}>{currentData[currentLeftImage].desc}</p>
                        <Gallery
                            images={pizzaImages}
                            vertical={true}
                            infinity={true}
                            width={650}
                            height={600}
                            controlStyle={controlStyle.leftPart}
                            currentImage={currentLeftImage}
                            setCurrentImage={setCurrentLeftImage}
                        />
                        <p>{currentData[currentLeftImage].price + "$"}</p>
                    </div>

                    <div className={classes.rightPart}>
                        <p className={classes.galleryTitle}>{currentData[currentRightImage].title}</p>
                        <p className={classes.galleryDescription}>{currentData[currentRightImage].desc}</p>
                        <Gallery
                            images={pizzaImages}
                            vertical={true}
                            infinity={true}
                            width={650}
                            height={600}
                            controlStyle={controlStyle.rightPart}
                            currentImage={currentRightImage}
                            setCurrentImage={setCurrentRightImage}
                        />
                        <p>{currentData[currentRightImage].price + "$"}</p>
                    </div>
                </div>
                <p>summary price</p>
                <button>Add to cart</button>
            </div>
        // </div>
    );
}
