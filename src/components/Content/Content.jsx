import { useMemo } from "react";
import classes from "./Content.module.css";
import Gallery from "../Gallery/Gallery";

export default function Content({ currentData }) {
    const pizzaImages = useMemo(() => {
        return currentData.map((el) => el.photo);
    }, []);

    const controlStyle = {
        leftPart: {
            left: "25%",
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
            <div className={classes.contentContainer}>
                <div className={classes.leftPart}>
                    <Gallery
                        images={pizzaImages}
                        vertical={true}
                        infinity={true}
                        width={550}
                        height={600}
                        controlStyle={controlStyle.leftPart}
                    />
                </div>

                <div className={classes.rightPart}>
                    <Gallery
                        images={pizzaImages}
                        vertical={true}
                        infinity={true}
                        width={550}
                        height={600}
                        controlStyle={controlStyle.rightPart}
                    />
                </div>
            </div>
        </div>
    );
}
