import { useEffect, useState } from "react"
import styles from "./SkillCard.module.css"
import { getAllSkills } from "../../api/config"

export default function SkillCard({ title, description, category }) {
    return (
        <div className={styles.card}>
            <p className={styles.category}>{category.toUpperCase()}</p>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
        </div>
    )
}