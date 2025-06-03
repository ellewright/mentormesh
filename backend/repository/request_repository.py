from model.request import Request
from model.request import Status

requests = [
    Request(id=0, sender_id=1, receiver_id=2, status=Status.INCOMPLETE),
    Request(id=1, sender_id=2, receiver_id=3, status=Status.COMPLETE),
    Request(id=2, sender_id=3, receiver_id=4, status=Status.IN_PROCESS)
]