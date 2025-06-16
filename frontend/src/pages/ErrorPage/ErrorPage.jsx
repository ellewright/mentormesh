import { useRouteError } from "react-router-dom"
import book from "../../assets/book.png"
import styles from "./ErrorPage.module.css"
import ErrorCard from "../../components/Error/ErrorCard/ErrorCard"

export default function ErrorPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                Oops, something went wrong!
            </h1>
            <div className={styles.body}>
                <ErrorCard />
            </div>
        </div>
    )
}