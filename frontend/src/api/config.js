import axios from "axios"

const app = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export async function getAllSkills() {
    const response = await app.get("/skills")
    const skills = response.data
    return skills
}

export async function getSkillsByCategory(category) {
    if (!category) {
        throw new Error("Cannot find that category.")
    }

    const response = await app.get(`/skills/${category}`)
    const skills = response.data
    return skills
}

export async function getSkillById(id) {
    const response = await app.get(`/skill/${id}`)
    const skill = response.data
    return skill
}

export async function getMentorById(id) {
    const response = await app.get(`/mentor/${id}`)
    const mentor = response.data
    return mentor
}