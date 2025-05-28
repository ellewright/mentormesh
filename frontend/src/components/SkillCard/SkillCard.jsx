import styles from "./SkillCard.module.css"
import { Link } from "react-router-dom"

export default function SkillCard({ id, title, description, category }) {
    return (
        <div className={styles.card}>
            <p className={styles.categoryContainer}>
                <Link to={`/skills/${category}`} className={styles.category}>
                    {category.toUpperCase()}
                </Link>
            </p>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    <Link to={`/skill/${id}`}>
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