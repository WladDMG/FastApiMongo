from pydantic import BaseModel

class User(BaseModel):
    nome: str
    email: str
    telefone: str
    endereço: str
    profissão: str
    senha: str  