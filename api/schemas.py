from typing import List
from pydantic import BaseModel

class Task(BaseModel):
    task: str