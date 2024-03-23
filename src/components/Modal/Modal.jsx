import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./Modal.module.css";

export default function Modal({
    isVisible,
    setIsVisible,
    modalTitle,
    modalText,
    onCancel,
    onSuccess,
    isCloseIcon,
    isFooter,
    isCancelButton,
    isImage,
    onSuccessButtonLabel,
    imageSource,
}) {
    if (!isVisible) return null;

    return (
        <>
            <div className={classes.overlay}>
                <div className={classes.modal}>
                    {isImage && (
                        <img
                            className={classes.img}
                            src={imageSource}
                        />
                    )}
                    <div className={classes.modalContent}>
                        <div className={classes.modalHeader}>
                            <p className={classes.header}>{modalTitle}</p>
                            {isCloseIcon && (
                                <button onClick={() => setIsVisible(false)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            )}
                        </div>

                        <div className={classes.modalBody}>{modalText()}</div>

                        {isFooter && (
                            <div className={classes.modalFooter}>
                                {isCancelButton && (
                                    <button
                                        className={classes.okButton}
                                        onClick={() => onCancel()}
                                    >
                                        Cancel
                                    </button>
                                )}

                                <button onClick={() => onSuccess()}>
                                    {onSuccessButtonLabel || "Done"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
