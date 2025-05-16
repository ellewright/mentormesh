import { useEffect, useState } from "react"
import { getAllSkills } from "../../api/config"
import SkillCard from "../../components/SkillCard/SkillCard"
// import styles from "./SkillPage.module.css"

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
        <div>
            {skills.map((skill) => (
                <SkillCard key={skill.id} title={skill.title} description={skill.description} category={skill.category} />
            ))}
        </div>
    )
}