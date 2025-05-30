import { useParams } from "react-router-dom"
import styles from "./MentorPage.module.css"
import { useEffect, useState } from "react"
import { getMentorByUsername, getSkillsByMentor } from "../../api/config"
import SkillCard from "../../components/Skill/SkillCard/SkillCard"

export default function MentorPage() {
    const { username } = useParams()
    const [skills, setSkills] = useState([])
    const [mentor, setMentor] = useState({
        id: null,
        username: ""
    })

    useEffect(() => {
        async function fetchMentor(username) {
            try {
                const requestedMentor = await getMentorByUsername(username)
                const requestedSkills = await getSkillsByMentor(requestedMentor.id)
                setMentor(requestedMentor)
                setSkills(requestedSkills)
            } catch (e) {
                console.error(`Error fetching mentor with the username ${username}.`)
            }
        }

        fetchMentor(username)
    }, [username])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{mentor.username ? mentor.username : ""}</h1>
            </div>
            <div className={styles.list}>
                {skills.map((skill) => (
                    <SkillCard key={skill.id} id={skill.id} title={skill.title} description={skill.description} category={skill.category} />
                ))}
            </div>
        </div>
    )
}