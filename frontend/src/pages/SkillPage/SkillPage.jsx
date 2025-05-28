import { useEffect, useState } from "react"
import styles from "./SkillPage.module.css"
import { getMentorById, getSkillById } from "../../api/config"
import { Link, useParams } from "react-router-dom"

export default function SkillPage() {
    const { id } = useParams()
    const [skill, setSkill] = useState({
        id: null,
        mentor: null,
        category: "",
        title: "",
        description: ""
    })
    const [mentor, setMentor] = useState({
        id: null,
        username: "",
        password: ""
    })

    useEffect(() => {
        async function getSkillAndMentor(id) {
            try {
                const requestedSkill = await getSkillById(id)
                const mentorId = requestedSkill.mentor
                const requestedMentor = await getMentorById(mentorId)

                setSkill(requestedSkill)
                setMentor(requestedMentor)
            } catch (e) {
                console.error(`Error fetching skill: ${e}`)
            }
        }

        getSkillAndMentor(id)
    }, [id])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{skill.title ? skill.title : ""}</h1>
                <p>
                    <Link to={`/${mentor.username}`} className={styles.category}>
                        {mentor.username}
                    </Link>
                </p>
            </div>
            <div className={styles.body}>
                <p className={styles.categoryContainer}>
                    <Link to={`/skills/${skill.category}`} className={styles.category}>
                        {skill.category ? `${skill.category.toUpperCase()}` : ""}
                    </Link>
                </p>
                <p>{skill.description ? skill.description : ""}</p>
            </div>
        </div>
    )
}