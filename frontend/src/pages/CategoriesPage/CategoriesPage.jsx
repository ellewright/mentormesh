import { useEffect, useState } from "react"
import styles from "./CategoriesPage.module.css"
import { getSkillsByCategory } from "../../api/config"
import { useParams } from "react-router-dom"
import SkillCard from "../../components/Skill/SkillCard/SkillCard"
import SkillList from "../../components/Skill/SkillList/SkillList"

export default function CategoriesPage() {
    const { category } = useParams()
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const requestSkills = async (category) => {
            try {
                const requestedSkills = await getSkillsByCategory(category)
                setSkills(requestedSkills)
            } catch (e) {
                console.error(`Error fetching categories under the ${category} category.`)
            }
        }

        requestSkills(category)
    }, [category])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    {category.toUpperCase()}
                </h1>
            </div>
            <SkillList skills={skills} />
        </div>
    )
}