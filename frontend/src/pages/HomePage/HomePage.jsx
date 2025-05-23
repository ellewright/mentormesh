import { Link } from "react-router-dom"
import styles from "./HomePage.module.css"

export default function HomePage() {
    return (
        <div className={styles.container}>
            <h1>A new way to imagine freelance work.</h1>
            <p>
                MentorMesh enables you to easily share your talents with others <span className={styles.bold}>in exchange for other skills.</span>
            </p>
            <p>
                We strive to cultivate a space where individuals can barter their skills and meet fellow learners, <i className={styles.italicized}>without</i> breaking the bank.
            </p>
            <p>
                Connect to a nearby professional and offer to trade skills!
            </p>
            <div>
                <Link className={styles.button} to="/skills">
                    Learn more
                </Link>
            </div>
        </div>
    )
}