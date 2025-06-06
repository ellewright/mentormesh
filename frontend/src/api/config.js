import axios from "axios"

const app = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

// Skills

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

// Mentors

export async function getMentorById(id) {
    const response = await app.get(`/mentor/id/${id}`)
    const mentor = response.data
    return mentor
}

export async function getMentorByUsername(username) {
    const response = await app.get(`/mentor/${username}`)
    const mentor = response.data
    return mentor
}

export async function getSkillsByMentor(id) {
    const response = await app.get(`mentor/skills/${id}`)
    const skills = response.data
    return skills
}

// Requests

export async function getRequestsBySenderId(senderId) {
    const response = await app.get(`requests/sender/${senderId}`)
    const requests = response.data
    return requests
}

export async function getRequestsByReceiverId(receiverId) {
    const response = await app.get(`requests/receiver/${receiverId}`)
    const requests = response.data
    return requests
}