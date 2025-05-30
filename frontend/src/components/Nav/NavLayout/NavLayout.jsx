import { Outlet, useNavigation } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import styles from "./NavLayout.module.css"

export default function NavLayout() {
    const { state } = useNavigation()
    const isLoading = state === "loading"

    return (
        <>
            <NavBar />
            {isLoading &&
                <div className={styles.spinner} />
            }
            <div className={styles.outlet + (isLoading ? "loading" : "")}>
                <Outlet />
            </div>
        </>
    )
}