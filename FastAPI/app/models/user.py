from email.headerregistry import Address
from unicodedata import name
from pydantic import BaseModel

class User(BaseModel):
    name: str
    password: str
    email: str
    phone: str
    address: str
    profession: str
    