import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal.jsx";

export default function Header({ createNewOrder }) {
    const [isCartWindowVisible, setIsCartWindowVisible] = useState(false);

    function getCartText() {
        return (
            <div>
                text text text text text text text text text text text text text
                text text text text text text text text text text text text text
                text text text text text text text text text text text text text
                text text text text text text
            </div>
        );
    }

    function onCartCancel() {
        console.log("cancelled");
        setIsCartWindowVisible(false);
    }

    return (
        <>
            {/* модалка в корне html-дерева */}
            {createPortal(
                <Modal
                    isVisible={isCartWindowVisible}
                    setIsVisible={setIsCartWindowVisible}
                    isCloseIcon={true}
                    isFooter={true}
                    isCancelButton={true}
                    modalTitle={"Cart"}
                    modalText={getCartText}
                    onCancel={onCartCancel}
                    // я бы сказал что это костыль, так как чтобы закрыть модалку
                    // мы не можем напрямую изменить стейт в функции createNewOrder,
                    // т.к. она передаётся (по логике) с более высокого уровня
                    onSuccess={() => {
                        setIsCartWindowVisible(false);
                        createNewOrder();
                    }}
                    onSuccessButtonLabel={"Make order"}
                />,
                document.body
            )}
            <header className={classes.headerRoot}>
                <div className={classes.headerContainer}>
                    <p className={classes.headerTitle}>Double Pizza</p>
                    <div
                        onClick={() => {
                            setIsCartWindowVisible(true);
                        }}
                        className={classes.headerIconBlock}
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </div>
            </header>
        </>
    );
}
