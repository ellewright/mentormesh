import { useEffect, useState } from "react"
import { getAllSkills } from "../../api/config"
import SkillCard from "../../components/Skill/SkillCard/SkillCard"
import styles from "./SkillsPage.module.css"
import SkillList from "../../components/Skill/SkillList/SkillList"

export default function SkillPage() {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const requestSkills = async () => {
            try {
                const requestedSkills = await getAllSkills()
                setSkills(requestedSkills)
            } catch (e) {
                console.error("Error fetching skills: " + e)
            }
        }

        requestSkills()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Skills
                </h1>
            </div>
            <SkillList skills={skills} />
        </div>
    )
}