import { useParams } from "react-router-dom"
import styles from "./MentorPage.module.css"
import { useEffect, useState } from "react"
import { getMentorByUsername, getRequestsByReceiverId, getRequestsBySenderId, getSkillsByMentor } from "../../api/config"
import SkillCard from "../../components/Skill/SkillCard/SkillCard"
import OfferCard from "../../components/Offer/OfferCard/OfferCard"
import SkillList from "../../components/Skill/SkillList/SkillList"

export default function MentorPage() {
    const { username } = useParams()
    const [mentor, setMentor] = useState({
        id: null,
        username: ""
    })
    const [skills, setSkills] = useState([])
    const [offers, setOffers] = useState([])
    const [requests, setRequests] = useState([])

    useEffect(() => {
        async function fetchMentor(username) {
            try {
                const requestedMentor = await getMentorByUsername(username)
                const requestedSkills = await getSkillsByMentor(requestedMentor.id)
                const requestedOffers = await getRequestsByReceiverId(requestedMentor.id)
                const requestedRequests = await getRequestsBySenderId(requestedMentor.id)
                setMentor(requestedMentor)
                setSkills(requestedSkills)
                setOffers(requestedOffers)
                setRequests(requestedRequests)
            } catch (e) {
                console.error(`Error fetching mentor with the username ${username}.`)
            }
        }

        fetchMentor(username)
    }, [username])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    {mentor.username ? mentor.username : ""}
                </h1>
            </div>
            <SkillList skills={skills} />
            <div>
                <h1 className={styles.subheader}>
                    Offers
                </h1>
            </div>
            <div className={styles.offers}>
                {
                    offers.map((offer) => (
                        <OfferCard
                            key={offer.id}
                            offer={offer}
                        />
                    ))
                }
            </div>
            <div>
                <h1 className={styles.subheader}>
                    Requests
                </h1>
            </div>
            <div className={styles.offers}>
                {
                    requests.map((request) => (
                        <OfferCard
                            key={request.id}
                            offer={request}
                        />
                    ))
                }
            </div>
        </div>
    )
}