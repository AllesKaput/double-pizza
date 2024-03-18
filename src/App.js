import { useState, useMemo } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const imagesForGallery = useMemo(() => {
        return [
            "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?b=1&s=612x612&w=0&k=20&c=8xbZvMyptEaqMW46diKakhVgkPkAzBi5l7J1yveCZFk=",
            "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
            "https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1641892050336-6ee99e47c8c8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2hhbyUyMHNva3xlbnwwfHwwfHx8MA%3D%3D",
        ];
    });

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

            <Gallery
                images={imagesForGallery}
                // vertical={true}
                // infinity={true}
            />
        </div>
    );
}

export default App;
