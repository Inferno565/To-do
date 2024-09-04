from sqlalchemy import Column, Integer, String
from .database import Base
from sqlalchemy.orm import relationship

class Task(Base):
    __tablename__ = "tasks"
    
    id = Column(Integer, index=True, primary_key=True)
    task = Column(String)