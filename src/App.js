import { useState, useEffect, useCallback } from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import { pizzaData } from "./pizzaData.js";

function App() {
    const [currentData, setCurrentData] = useState(pizzaData);
    const [isCartWindowVisible, setIsCartWindowVisible] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (isCartWindowVisible) {
            document.body.classList.add("locked");
        } else {
            document.body.classList.remove("locked");
        }
    }, [isCartWindowVisible]);

    const createNewOrder = useCallback(() => {
        if (cart.length) {
            alert("Order created!");
        }
        console.log("order button clicked");
        setCart([]);
    }, [cart]);

    return (
        <div className={classes.container}>
            <Header
                createNewOrder={createNewOrder}
                isCartWindowVisible={isCartWindowVisible}
                setIsCartWindowVisible={setIsCartWindowVisible}
                cart={cart}
                setCart={setCart}
            />
            <Content currentData={currentData} cart={cart} />
        </div>
    );
}

export default App;
