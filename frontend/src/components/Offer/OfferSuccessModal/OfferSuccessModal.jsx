import styles from "./OfferSuccessModal.module.css"

export default function OfferSuccessModal({ setIsOpen }) {
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>
                            Success!
                        </h5>
                    </div>
                    <div className={styles.modalContent}>
                        Trade completed.
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