from enum import Enum
from model.skill import Skill
from pydantic import BaseModel

class Status(Enum):
    APPROVED = "approved"
    REJECTED = "rejected"
    PENDING = "pending"

class Request(BaseModel):
    id: int
    sender_id: int
    sender_skill_id: int
    receiver_id: int
    receiver_skill_id: int
    status: Status