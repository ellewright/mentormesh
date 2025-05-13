import sys
from http.client import HTTPException
from fastapi import FastAPI

sys.path.append("./model")

from skill import Skill
from skill import Category

app = FastAPI()

skills = {
    0: Skill(id=0, category=Category.LIFE, title="How to Change a Tire", description="I'll teach you how to change a car tire."),
    1: Skill(id=1, category=Category.MUSIC, title="How to Play Free Bird Solo", description="I'll teach you how to play the Free Bird solo on guitar."),
    2: Skill(id=2, category=Category.MATH, title="The Pythagorean Theorem", description="I'll teach you the Pythagorean theorem so it's easy to understand.")
}

@app.get("/")
def get_all_skills() -> dict[str, dict[int, Skill]]:
    return {"skills": skills}

@app.get("/skills/{skill_id}")
def get_skill_by_id(skill_id: int) -> Skill:
    if skill_id not in skills:
        raise HTTPException(status_code=404, detail=f"Could not find skill with id {skill_id}.")
    
    return skills[skill_id]