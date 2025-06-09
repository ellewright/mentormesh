import { useRouteError } from "react-router-dom"
import book from "../../assets/book.png"
import styles from "./ErrorPage.module.css"

export default function ErrorPage() {
    const error = useRouteError()

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                Oops, something went wrong!
            </h1>
            <div className={styles.body}>
                {import.meta.env.VITE_MODE != "production" ? (
                    <>
                        <pre className={styles.errorMessage}>
                            {error.message}
                        </pre>
                        <pre className={styles.stackTrace}>
                            {error.stack}
                        </pre>
                    </>
                ) : (
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
                )}
            </div>
        </div>
    )
}