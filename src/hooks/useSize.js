import { useState, useEffect } from "react";

export default function useSize() {
    const [screenWidth, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        function sizeHandler(event) {
            setWidthScreen(event.target.innerWidth);
        }
        window.addEventListener("resize", (event) => {
            sizeHandler(event);
        });

        return () => {
            window.removeEventListener("resize", sizeHandler);
        };
    }, []);

    return {
        screenWidth,
    };
}
