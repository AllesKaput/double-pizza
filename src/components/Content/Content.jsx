import { useMemo, useState } from "react";
import classes from "./Content.module.css";
import Gallery from "../Gallery/Gallery";

export default function Content({ currentData, cart }) {
    const pizzaImages = useMemo(() => {
        return currentData.map((el) => el.photo);
    }, []);

    const [currentLeftPizza, setCurrentLeftPizza] = useState(0);
    const [currentRightPizza, setCurrentRightPizza] = useState(0);

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

    function addToCart() {
        cart.push({
            title1: currentData[currentLeftPizza].title,
            price1: currentData[currentLeftPizza].price,
            title2: currentData[currentRightPizza].title,
            price2: currentData[currentRightPizza].price,
            summary:
                +currentData[currentLeftPizza].price +
                +currentData[currentRightPizza].price,
        });
    }

    return (
        <div className={classes.contentBlock}>
            <div className={classes.contentContainer}>
                <div className={classes.galleries}>
                    <div className={classes.leftPart}>
                        <p className={classes.galleryTitle}>
                            {currentData[currentLeftPizza].title}
                        </p>
                        <p className={classes.galleryDescription}>
                            {currentData[currentLeftPizza].desc}
                        </p>
                        <Gallery
                            images={pizzaImages}
                            vertical={true}
                            infinity={true}
                            width={600}
                            height={550}
                            controlStyle={controlStyle.leftPart}
                            currentImage={currentLeftPizza}
                            setCurrentImage={setCurrentLeftPizza}
                        />
                        <p className={classes.price}>
                            {currentData[currentLeftPizza].price}$
                        </p>
                    </div>

                    <div className={classes.rightPart}>
                        <p className={classes.galleryTitle}>
                            {currentData[currentRightPizza].title}
                        </p>
                        <p className={classes.galleryDescription}>
                            {currentData[currentRightPizza].desc}
                        </p>
                        <Gallery
                            images={pizzaImages}
                            vertical={true}
                            infinity={true}
                            width={600}
                            height={550}
                            controlStyle={controlStyle.rightPart}
                            currentImage={currentRightPizza}
                            setCurrentImage={setCurrentRightPizza}
                        />
                        <p className={classes.price}>
                            {currentData[currentRightPizza].price}$
                        </p>
                    </div>
                </div>
                <div className={classes.contentFooter}>
                    <p className={classes.summaryPrice}>
                        Summary price:{" "}
                        {+currentData[currentLeftPizza].price +
                            +currentData[currentRightPizza].price}
                        $
                    </p>
                    <button
                        onClick={() => {
                            addToCart();
                        }}
                        className={classes.addToCartButton}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
