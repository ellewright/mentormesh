import axios from "axios"

const app = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export async function getAllSkills() {
    const response = await app.get("/")
    const skills = response.data
    return skills
}