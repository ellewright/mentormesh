import sys

sys.path.append("../model")

from skill import Skill
from skill import Category

skills = [
    Skill(id=0, category=Category.LIFE, title="How to Change a Tire", description="I'll teach you how to change a car tire."),
    Skill(id=1, category=Category.MUSIC, title="How to Play Free Bird Solo", description="I'll teach you how to play the Free Bird solo on guitar."),
    Skill(id=2, category=Category.MATH, title="The Pythagorean Theorem", description="I'll teach you the Pythagorean theorem so it's easy to understand.")
]