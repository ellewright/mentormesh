import axios from "axios"

const app = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export async function getAllSkills() {
    const response = await app.get("/")
    const skills = response.data
    return skills
}

export async function getSkillById(id) {
    const response = await app.get(`/skill/${id}`)
    const skill = response.data
    return skill
}