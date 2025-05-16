import sys

sys.path.append("./model")
sys.path.append("./repository")

from skill import Skill
from skill_repository import skills
from http.client import HTTPException
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

@app.get("/")
def get_all_skills() -> list[Skill]:
    skill_list = []
    
    for skill in skills:
        skill_list.append(skill)

    return skill_list

@app.get("/skills/{skill_id}")
def get_skill_by_id(skill_id: int) -> Skill:
    if skill_id not in skills:
        raise HTTPException(status_code=404, detail=f"Could not find skill with id {skill_id}.")
    
    return skills[skill_id]