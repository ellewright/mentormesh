import styles from "./NavBar.module.css"
import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom"

export default function NavBar() {
    const navigate = useNavigate()

    function handleSubmit(e) {
        navigate(`/skills/${e.target.value}`)
    }

    return (
        <div className={styles.navbar}>
            <h1>
                <span className={styles.header}>
                    <Link to="/skills">
                        MentorMesh
                    </Link>
                </span> : <span className={styles.slogan}>
                    A Peer-to-Peer Learning Platform
                </span>
            </h1>
            <form className={styles.form}>
                <label
                    className={styles.formLabel}
                    htmlFor="category"
                >
                    Category
                </label>
                <select
                    className={styles.select}
                    name="category"
                    id="category"
                    onChange={(e) => handleSubmit(e)}
                >
                    <option value="music">Music</option>
                    <option value="science">Science</option>
                    <option value="math">Math</option>
                    <option value="history">History</option>
                    <option value="life">Life</option>
                </select>
            </form>
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