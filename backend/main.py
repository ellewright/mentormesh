import sys
from model.request import Request
from model.request import Status
from model.mentor import Mentor
from model.skill import Skill
from model.skill import Category
from repository.request_repository import requests
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

# Skills

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

# Mentors

@app.get("/mentors")
def get_all_mentors() -> list[Mentor]:
    mentor_list = []

    for mentor in mentors:
        mentor_list.append(mentor)

    return mentor_list

@app.get("/mentor/id/{mentor_id}")
def get_mentor_by_id(mentor_id: int) -> Mentor:
    for mentor in mentors:
        if mentor_id == mentor.id:
            return mentor
        
    raise HTTPException(status_code=404, detail=f"Could not find mentor with id {mentor_id}.")

@app.get("/mentor/{username}")
def get_mentor_by_username(username: str) -> Mentor:
    for mentor in mentors:
        if username == mentor.username:
            return mentor
        
    raise HTTPException(status_code=404, detail=f"Could not find mentor with username {username}.")

@app.get("/mentor/skills/{mentor_id}")
def get_skills_by_mentor(mentor_id: int) -> list[Skill]:
    skill_list = []

    for skill in skills:
        if mentor_id == skill.mentor:
            skill_list.append(skill)

    return skill_list

# Requests

@app.get("/requests")
def get_all_requests() -> list[Request]:
    request_list = []

    for request in requests:
        request_list.append(request)

    return request_list

@app.get("/requests/{request_id}")
def get_request_by_id(request_id: int) -> Request:
    for request in requests:
        if request.id == request_id:
            return request
        
    raise HTTPException(status_code=404, detail=f"Could not find request with id {request_id}.")

@app.get("/requests/sender/{sender_id}")
def get_request_by_id(sender_id: int) -> list[Request]:
    requests_list = []

    for request in requests:
        if request.sender_id == sender_id:
            requests_list.append(request)
        
    return requests_list

@app.get("/requests/receiver/{receiver_id}")
def get_request_by_id(receiver_id: int) -> list[Request]:
    requests_list = []

    for request in requests:
        if request.receiver_id == receiver_id:
            requests_list.append(request)
        
    return requests_list