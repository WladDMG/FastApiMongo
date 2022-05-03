from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.user import user 
app = FastAPI()
app.include_router(user)

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:19006"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#start cmd: uvicorn index:app --reload
#swagger: http://localhost:8000/docs#/