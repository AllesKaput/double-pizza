import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal.jsx";

function App() {
    const [isVisible, setIsVisible] = useState(false);

    function onCancel() {
        setIsVisible(false);
    }

    function onSuccess() {
        alert("Ok");
        setIsVisible(false);
    }

    return (
        <div className="App">
            <button
                onClick={() => {
                    setIsVisible(true);
                }}
            >
                Click me
            </button>

            <Modal
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                modalTitle="Header"
                modalText="text text text text text text text text text text text text text text text text"
                imageSource="https://co.radio.net/images/broadcasts/fb/5a/16085/1/c300.png"
                onCancel={onCancel}
                onSuccess={onSuccess}
                isCloseIcon={true}
                isFooter={true}
                isCancelButton={true}
                isImage={true}
                onSuccessButtonLabel="Success"
            ></Modal>
        </div>
    );
}

export default App;
