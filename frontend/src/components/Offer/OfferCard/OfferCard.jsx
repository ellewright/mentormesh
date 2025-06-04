import { useEffect, useState } from "react"
import styles from "./OfferCard.module.css"
import { getMentorById, getSkillById } from "../../../api/config"
import { Link } from "react-router-dom"

export default function OfferCard({ offer }) {
    const [sender, setSender] = useState({
        id: null,
        username: ""
    })
    const [senderSkill, setSenderSkill] = useState({
        id: null,
        mentor: null,
        category: "",
        title: "",
        description: ""
    })
    const [receiver, setReceiver] = useState({
        id: null,
        username: ""
    })
    const [receiverSkill, setReceiverSkill] = useState({
        id: null,
        mentor: null,
        category: "",
        title: "",
        description: ""
    })

    useEffect(() => {
        async function gatherOfferDetails(offer) {
            try {
                const requestedSender = await getMentorById(offer.sender_id)
                const requestedSenderSkill = await getSkillById(offer.sender_skill_id)
                const requestedReceiver = await getMentorById(offer.receiver_id)
                const requestedReceiverSkill = await getSkillById(offer.receiver_skill_id)

                setSender(requestedSender)
                setSenderSkill(requestedSenderSkill)
                setReceiver(requestedReceiver)
                setReceiverSkill(requestedReceiverSkill)
            } catch (e) {
                console.error(`Error fetching offer with the id ${offer.id}.`)
            }
        }

        gatherOfferDetails(offer)
    }, [offer])

    return (
        <div className={styles.container}>
            <div className={styles.receiver}>
                <p className={`${styles.usernameContainer} ${styles.username}`}>
                    {receiver.username}'s skill
                </p>
                <h1 className={styles.skillTitle}>
                    {receiverSkill.title}
                </h1>
            </div>
            <div className={styles.sender}>
                <p className={styles.usernameContainer}>
                    <Link to={`/${sender.username}`} className={styles.username}>
                        {sender.username}'s skill
                    </Link>
                </p>
                <h1 className={styles.skillTitleContainer}>
                    <Link to={`/skill/${senderSkill.id}`} className={styles.skillTitle}>
                        {senderSkill.title}
                    </Link>
                </h1>
            </div>
            <div className={styles.status}>
                <p>
                    Status
                </p>
                <h1 className={
                    offer.status === "rejected" ? styles.rejected
                        : offer.status === "approved" ? styles.approved
                            : styles.pending
                }
                >
                    {offer.status.toUpperCase()}
                </h1>
            </div>
        </div>
    )
}