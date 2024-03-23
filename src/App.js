import { useState, useMemo, useEffect, useCallback } from "react";
import classes from "./App.module.css";
import Gallery from "./components/Gallery/Gallery.jsx";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import { pizzaData } from "./pizzaData.js";

function App() {
    const [currentData, setCurrentData] = useState(pizzaData);

    const createNewOrder = useCallback(() => {
        console.log("order created");
    }, []);

    return (
        <div className={classes.container}>
            <Header createNewOrder={createNewOrder} />
            <Content currentData={currentData} />
        </div>
    );
}

export default App;
