from pydantic import BaseModel

class Mentor(BaseModel):
    id: int
    username: str
    password: str