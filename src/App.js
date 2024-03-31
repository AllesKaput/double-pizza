import { useState, useMemo, useEffect, useCallback } from "react";
import classes from "./App.module.css";
import Gallery from "./components/Gallery/Gallery.jsx";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import { pizzaData } from "./pizzaData.js";

function App() {
    const [currentData, setCurrentData] = useState(pizzaData);
    const [isCartWindowVisible, setIsCartWindowVisible] = useState(false);

    useEffect(() => {
        if (isCartWindowVisible) {
            document.body.classList.add("locked");
        } else {
            document.body.classList.remove("locked");
        }
    }, [isCartWindowVisible]);

    const createNewOrder = useCallback(() => {
        console.log("order created");
    }, []);

    return (
        <div className={classes.container}>
            <Header
                createNewOrder={createNewOrder}
                isCartWindowVisible={isCartWindowVisible}
                setIsCartWindowVisible={setIsCartWindowVisible}
            />
            <Content currentData={currentData} />
        </div>
    );
}

export default App;
