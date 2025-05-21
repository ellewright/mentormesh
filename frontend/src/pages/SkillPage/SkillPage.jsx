import { useEffect, useState } from "react"
import styles from "./SkillPage.module.css"
import { getSkillById } from "../../api/config"
import { useParams } from "react-router-dom"

export default function SkillPage() {
    const { id } = useParams()
    const [skill, setSkill] = useState({
        id: null,
        category: "",
        title: "",
        description: ""
    })

    useEffect(() => {
        async function getSkill(id) {
            try {
                const requestedSkill = await getSkillById(id)
                setSkill(requestedSkill)
            } catch (e) {
                console.error(`Error fetching skill: ${e}`)
            }
        }

        getSkill(id)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{skill.title ? skill.title : ""}</h1>
                <p className={styles.category}>{skill.category ? `Category: ${skill.category.toUpperCase()}` : ""}</p>
            </div>
            <p>{skill.description ? skill.description : ""}</p>
        </div>
    )
}