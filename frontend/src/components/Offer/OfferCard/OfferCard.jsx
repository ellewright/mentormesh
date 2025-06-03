import { useEffect, useState } from "react"
import styles from "./OfferCard.module.css"
import { getMentorById, getSkillById } from "../../../api/config"

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
                <p>{receiver.username}'s skill</p>
                <h1>{receiverSkill.title}</h1>
            </div>
            <div className={styles.sender}>
                <p>{sender.username}'s skill</p>
                <h1>{senderSkill.title}</h1>
            </div>
            <div className={styles.status}>
                <p>Status</p>
                <h1>{offer.status.toUpperCase()}</h1>
            </div>
        </div>
    )
}