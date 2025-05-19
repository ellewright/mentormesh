import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <h1><span className={styles.header}>MentorMesh</span>: <span className={styles.slogan}>A Peer-to-Peer Learning Platform</span></h1>
        </div>
    )
}