import { useRouteError } from "react-router-dom"
import book from "../../../assets/book.png"
import styles from "./ErrorCard.module.css"

export default function ErrorCard() {
    const error = useRouteError()

    if (import.meta.env.VITE_MODE != "production") {
        return (
            <>
                <pre className={styles.errorMessage}>
                    {error.message}
                </pre>
                <pre className={styles.stackTrace}>
                    {error.stack}
                </pre>
            </>
        )
    } else {
        return (
            <>
                <p>
                    We can't seem to find the page you're looking for. Please try refreshing the window.
                </p>
                <img
                    className={styles.logo}
                    src={book}
                    alt="MentorMesh logo."
                />
            </>
        )
    }
}