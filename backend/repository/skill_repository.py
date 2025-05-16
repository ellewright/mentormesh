import sys

sys.path.append("../model")

from skill import Skill
from skill import Category

skills = [
    Skill(id=0, category=Category.LIFE, title="How to Change a Tire", description="I'll teach you how to change a car tire."),
    Skill(id=1, category=Category.MUSIC, title="How to Play Free Bird Solo", description="I'll teach you how to play the Free Bird solo on guitar."),
    Skill(id=2, category=Category.MATH, title="The Pythagorean Theorem", description="I'll teach you the Pythagorean theorem so it's easy to understand."),
    Skill(id=3, category=Category.SCIENCE, title="Explaining Evolution", description="Learn evolution from a certified biologist."),
    Skill(id=4, category=Category.HISTORY, title="Life in the Middle Ages", description="Find out what life was like in 600 AD."),
    Skill(id=5, category=Category.LIFE, title="Need Tax Help?", description="I'll file your taxes!")
]