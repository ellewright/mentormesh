import sys
from model.mentor import Mentor
from model.skill import Skill
from model.skill import Category
from repository.skill_repository import skills
from repository.mentor_repository import mentors
from fastapi import HTTPException
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/skills")
def get_all_skills() -> list[Skill]:
    skill_list = []
    
    for skill in skills:
        skill_list.append(skill)

    return skill_list

@app.get("/skills/{category}")
def get_skills_by_category(category: str) -> list[Skill]:
    skill_list = []

    for skill in skills:
        category_enum = Category[category.upper()]
        if skill.category == category_enum:
            skill_list.append(skill)

    return skill_list

@app.get("/skill/{skill_id}")
def get_skill_by_id(skill_id: int) -> Skill:
    for skill in skills:
        if skill_id == skill.id:
            return skill
        
    raise HTTPException(status_code=404, detail=f"Could not find skill with id {skill_id}.")

@app.get("/mentors")
def get_all_mentors() -> list[Mentor]:
    mentor_list = []

    for mentor in mentors:
        mentor_list.append(mentor)

    return mentor_list

@app.get("/mentor/{mentor_id}")
def get_mentor_by_id(mentor_id: int) -> Mentor:
    for mentor in mentors:
        if mentor_id == mentor.id:
            return mentor
        
    raise HTTPException(status_code=404, detail=f"Could not find mentor with id {mentor_id}.")