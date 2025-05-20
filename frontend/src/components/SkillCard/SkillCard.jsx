import styles from "./SkillCard.module.css"
import { Link } from "react-router-dom"

export default function SkillCard({ id, title, description, category }) {
    return (
        <div className={styles.card}>
            <p className={styles.category}>{category.toUpperCase()}</p>
            <h1 className={styles.title}><Link to={`/skill/${id}`}>{title}</Link></h1>
            <p className={styles.description}>{description}</p>
        </div>
    )
}