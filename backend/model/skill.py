from pydantic import BaseModel
from enum import Enum

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