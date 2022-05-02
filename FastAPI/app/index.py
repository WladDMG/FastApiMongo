from fastapi import FastAPI
from app.routes.user import user 
app = FastAPI()
app.include_router(user)

#start cmd: uvicorn index:app --reload
#swagger: http://localhost:8000/docs#/