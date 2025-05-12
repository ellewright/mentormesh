import styles from "./SkillCard.module.css"

export default function SkillCard() {
    return (
        <div className={styles.card}>
            <p className={styles.category}>Category</p>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.description}>Description</p>
        </div>
    )
}