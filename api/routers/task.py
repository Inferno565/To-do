from typing import List
from .. import schemas, database, models
from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session

router = APIRouter(tags=["Tasks"], prefix="/task")

get_db = database.get_db


@router.post("/", status_code=status.HTTP_201_CREATED)
def create_task(request: schemas.Task, db: Session = Depends(get_db)):
    new_task = models.Task(task=request.task)
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task


@router.get("/", status_code=status.HTTP_200_OK)
def get_all(db: Session = Depends(get_db)):
    tasks = db.query(models.Task).all()
    return tasks


@router.get("/{id}", status_code=status.HTTP_200_OK)
def get_by_id(id, db: Session = Depends(get_db)):
    task = db.query(models.Task).filter(models.Task.id == id).first()
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Task with id {id} not available!",
        )
    return task
