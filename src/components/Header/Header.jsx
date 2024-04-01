import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal.jsx";

export default function Header({
    createNewOrder,
    isCartWindowVisible,
    setIsCartWindowVisible,
    cart,
}) {
    const CartList = () => {
        return (
            <ul>
                {cart.map((item) => {
                    return (
                        <li key={item}>
                            <div>{item.title1}</div>
                            <div>{item.price1}$</div>
                            <div>{item.title2}</div>
                            <div>{item.price2}$</div>
                            <div>Summary: {item.summary}$</div>
                        </li>
                    );
                })}
            </ul>
        );
    };

    function getCartText() {
        return <CartList />;
    }

    function onCartCancel() {
        console.log("cancel button clicked");
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
                    modalText={
                        cart.length
                            ? getCartText
                            : () => {
                                  return "Cart is empty!";
                              }
                    }
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
