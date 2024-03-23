import { useMemo } from "react";
import classes from "./Content.module.css";
import Gallery from "../Gallery/Gallery";

export default function Content({ currentData }) {
    const pizzaImages = useMemo(() => {
        return currentData.map((el) => el.photo);
    }, []);

    return (
        <div className={classes.contentBlock}>
            <div className={classes.contentContainer}>
                    <div className={classes.leftPart}>
                        <Gallery
                            images={pizzaImages}
                            vertical={true}
                            infinity={true}
                        />
                    </div>

                    <div className={classes.rightPart}>
                        <Gallery
                            images={pizzaImages}
                            vertical={true}
                            infinity={true}
                        />
                    </div>
            </div>
        </div>
    );
}
