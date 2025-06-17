import SkillCard from "../SkillCard/SkillCard"
import styles from "./SkillList.module.css"

export default function SkillList({ skills }) {
    return (
        <div className={styles.list}>
            {skills.map((skill) => (
                <SkillCard
                    key={skill.id}
                    id={skill.id}
                    title={skill.title}
                    description={skill.description}
                    category={skill.category}
                />
            ))}
        </div>
    )
}