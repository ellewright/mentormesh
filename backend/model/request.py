from pydantic import BaseModel

class Status(Enum):
    COMPLETE = "complete"
    INCOMPLETE = "incomplete"
    IN_PROCESS = "in process"

class Request(BaseModel):
    id: int
    sender_id: int
    receiver_id: int
    status: Status