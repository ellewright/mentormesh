import styles from "./NavBar.module.css"
import { Outlet, useNavigation } from "react-router-dom"

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <h1><span className={styles.header}>MentorMesh</span>: <span className={styles.slogan}>A Peer-to-Peer Learning Platform</span></h1>
        </div>
    )
}

export function NavLayout() {
    const { state } = useNavigation()
    const isLoading = state === "loading"

    return (
        <>
            <NavBar />
            {isLoading &&
                <div className={styles.spinner} />
            }
            <div className={styles.container + (isLoading ? "loading" : "")}>
                <Outlet />
            </div>
        </>
    )
}