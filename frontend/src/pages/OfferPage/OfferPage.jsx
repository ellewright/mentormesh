import { useEffect, useState } from "react"
import styles from "./OfferPage.module.css"
import { getAllSkills, getSkillById } from "../../api/config"
import { useParams } from "react-router-dom"

export default function OfferPage() {
    const { skillId } = useParams()
    const [offeredSkill, setOfferedSkill] = useState({
        id: null,
        mentor: null,
        category: "",
        title: "",
        description: ""
    })
    const [offerableSkills, setOfferableSkills] = useState([])

    useEffect(() => {
        async function getOfferedSkill(skillId) {
            const apiResponse = await getSkillById(skillId)
            setOfferedSkill(apiResponse)
        }

        async function getOfferableSkills() {
            const apiResponse = await getAllSkills()
            setOfferableSkills(apiResponse)
        }

        getOfferedSkill(skillId)
        getOfferableSkills()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{offeredSkill.title}</h1>
            </div>
            <div className={styles.body}>
                <form className={styles.form}>
                    <label>
                        Options to trade:
                    </label>
                    <select className={styles.select}>
                        {offerableSkills.map((skill) => (
                            <option key={skill.id}>{skill.title}</option>
                        ))}
                    </select>
                    <button>Offer</button>
                </form>
            </div>
        </div>
    )
}