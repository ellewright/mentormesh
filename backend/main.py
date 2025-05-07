from enum import Enum

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Category(Enum):
    MUSIC = "music"
    SCIENCE = "science"
    MATH = "math"
    HISTORY = "history"
    LIFE = "life"

class Skill(BaseModel):
    id: int
    category: Category
    title: str
    description: str

skills = {
    0: Skill(id=0, category=Category.LIFE, title="How to Change a Tire", description="I'll teach you how to change a car tire."),
    1: Skill(id=1, category=Category.MUSIC, title="How to Play Free Bird Solo", description="I'll teach you how to play the Free Bird solo on guitar."),
    2: Skill(id=2, category=Category.MATH, title="The Pythagorean Theorem", description="I'll teach you the Pythagorean theorem so it's easy to understand.")
}

@app.get("/")
def index() -> dict[str, dict[int, Skill]]:
    return {"skills": skills}