from pydantic import BaseModel
from typing import List
from .skill import Skill

class Mentor(BaseModel):
    id: int
    username: str
    email: str
    full_name: str
    bio: str
    skills: List[Skill]