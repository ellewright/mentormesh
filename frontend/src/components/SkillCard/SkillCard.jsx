import styles from "./SkillCard.module.css"
import { Link } from "react-router-dom"

export default function SkillCard({ id, title, description, category }) {
    return (
        <div className={styles.card}>
            <p className={styles.category}>
                {category.toUpperCase()}
            </p>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    <Link as="h1" to={`/skill/${id}`}>
                        {title}
                    </Link>
                </h1>
            </div>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    )
}