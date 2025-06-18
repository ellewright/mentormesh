import { Link } from "react-router-dom"
import styles from "./Skill.module.css"

export default function Skill({ skill, mentor }) {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.links}>
                    <div className={styles.usernameContainer}>
                        <Link
                            to={`/${mentor.username}`}
                            className={styles.username}
                        >
                            {mentor.username}
                        </Link>
                    </div>
                    <div className={styles.categoryContainer}>
                        <Link
                            to={`/skills/${skill.category}`}
                            className={styles.category}
                        >
                            {skill.category ? `${skill.category.toUpperCase()}` : ""}
                        </Link>
                    </div>
                </div>
                <div className={styles.description}>
                    <h2>
                        Description
                    </h2>
                    <p>
                        {skill.description ? skill.description : ""}
                    </p>
                </div>
            </div>
            <a
                className={styles.footer}
                href={`/offer/${skill.id}`}
            >
                <div>
                    Make an offer
                </div>
            </a>
        </>
    )
}