import styles from "./OfferRequestFailureModal.module.css"

export default function OfferRequestFailureModal({ setIsOpen }) {
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>
                            Failure!
                        </h5>
                    </div>
                    <div className={styles.modalContent}>
                        Trade not completed.
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.ok} onClick={() => setIsOpen(false)}>
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}