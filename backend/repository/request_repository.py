from model.request import Request
from model.request import Status

requests = [
    Request(id=0, sender_id=1, sender_skill_id=4, receiver_id=2, receiver_skill_id=17, status=Status.INCOMPLETE),
    Request(id=1, sender_id=2, sender_skill_id=16, receiver_id=3, receiver_skill_id=23, status=Status.COMPLETE),
    Request(id=2, sender_id=3, sender_skill_id=25, receiver_id=4, receiver_skill_id=29, status=Status.IN_PROCESS),
    Request(id=3, sender_id=4, sender_skill_id=30, receiver_id=5, receiver_skill_id=33, status=Status.COMPLETE),
    Request(id=4, sender_id=5, sender_skill_id=35, receiver_id=6, receiver_skill_id=39, status=Status.IN_PROCESS),
    Request(id=5, sender_id=6, sender_skill_id=38, receiver_id=7, receiver_skill_id=43, status=Status.INCOMPLETE),
    Request(id=6, sender_id=7, sender_skill_id=41, receiver_id=8, receiver_skill_id=46, status=Status.COMPLETE),
    Request(id=7, sender_id=8, sender_skill_id=47, receiver_id=9, receiver_skill_id=52, status=Status.IN_PROCESS),
    Request(id=8, sender_id=9, sender_skill_id=53, receiver_id=10, receiver_skill_id=57, status=Status.INCOMPLETE),
    Request(id=9, sender_id=10, sender_skill_id=58, receiver_id=11, receiver_skill_id=63, status=Status.IN_PROCESS),
    Request(id=10, sender_id=11, sender_skill_id=61, receiver_id=0, receiver_skill_id=0, status=Status.COMPLETE),
    Request(id=11, sender_id=0, sender_skill_id=2, receiver_id=1, receiver_skill_id=6, status=Status.IN_PROCESS),
    Request(id=12, sender_id=1, sender_skill_id=14, receiver_id=2, receiver_skill_id=18, status=Status.INCOMPLETE),
    Request(id=13, sender_id=2, sender_skill_id=20, receiver_id=5, receiver_skill_id=32, status=Status.COMPLETE),
    Request(id=14, sender_id=6, sender_skill_id=36, receiver_id=2, receiver_skill_id=19, status=Status.INCOMPLETE),
    Request(id=15, sender_id=7, sender_skill_id=43, receiver_id=3, receiver_skill_id=25, status=Status.IN_PROCESS),
    Request(id=16, sender_id=0, sender_skill_id=10, receiver_id=2, receiver_skill_id=18, status=Status.COMPLETE),
    Request(id=17, sender_id=3, sender_skill_id=23, receiver_id=7, receiver_skill_id=42, status=Status.INCOMPLETE)
]