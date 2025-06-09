import { useEffect, useState } from "react"
import styles from "./OfferPage.module.css"
import { getAllSkills, getSkillById } from "../../api/config"
import { useParams } from "react-router-dom"
import OfferRequestSuccessModal from "../../components/Offer/Requests/OfferRequestSuccessModal/OfferRequestSuccessModal"
import OfferRequestFailureModal from "../../components/Offer/Requests/OfferRequestFailureModal/OfferRequestFailureModal"

export default function OfferPage() {
    const [isSuccessful, setIsSuccessful] = useState(false)
    const [isFailure, setIsFailure] = useState(false)
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

    function handleSubmit(e) {
        e.preventDefault()

        // Ultimately, here we will determine whether or not two skills
        // are valid to trade and send a request to the Mentor.
        // At the moment, there is no real Mentor database, so for now,
        // this method simply chooses to succeed or fail the request at
        // random, to test both cases.

        const success = Math.round(Math.random())

        if (success) {
            setIsSuccessful(true)
        } else {
            setIsFailure(true)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    {offeredSkill.title}
                </h1>
            </div>
            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <div className={styles.body}>
                    <label>
                        Options to trade:
                    </label>
                    <select className={styles.select}>
                        {offerableSkills.map((skill) => (
                            <option key={skill.id}>
                                {skill.title}
                            </option>
                        ))}
                    </select>
                </div>
                <button>
                    Offer
                </button>
            </form>
            {isSuccessful && <OfferRequestSuccessModal setIsOpen={setIsSuccessful} />}
            {isFailure && <OfferRequestFailureModal setIsOpen={setIsFailure} />}
        </div>
    )
}