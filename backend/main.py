import sys

sys.path.append("./model")
sys.path.append("./repository")

from skill import Skill
from skill_repository import skills
from http.client import HTTPException
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def get_all_skills() -> dict[str, dict[int, Skill]]:
    return {"skills": skills}

@app.get("/skills/{skill_id}")
def get_skill_by_id(skill_id: int) -> Skill:
    if skill_id not in skills:
        raise HTTPException(status_code=404, detail=f"Could not find skill with id {skill_id}.")
    
    return skills[skill_id]