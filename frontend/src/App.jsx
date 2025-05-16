import { useEffect, useState } from 'react'
import './App.css'
import SkillCard from './components/SkillCard/SkillCard'
import { getAllSkills } from './api/config'

function App() {
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

export default App