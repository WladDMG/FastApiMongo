from fastapi import APIRouter
from app.models.user import User 
from app.config.db import conn 
from app.schemas.user import serializeDict, serializeList
from bson import ObjectId
user = APIRouter() 

@user.get('/')
async def Buscar_Todos_Usuarios():
    return serializeList(conn.local.user.find())

@user.get('/{id}')
async def Buscar_um_Usuario(id):
    return serializeDict(conn.local.user.find_one({"_id":ObjectId(id)}))

@user.put('/{id}')
async def Atualizar_Usuario(id,user: User):
    conn.local.user.find_one_and_update({"_id":ObjectId(id)},{
        "$set":dict(user)
    })
    return serializeDict(conn.local.user.find_one({"_id":ObjectId(id)}))
@user.post('/')
async def criar_Usuario(user: User):
    conn.local.user.insert_one(dict(user))
    return serializeList(conn.local.user.find())

@user.delete('/{id}')
async def Deletar_Usuario(id,user: User):
    return serializeDict(conn.local.user.find_one_and_delete({"_id":ObjectId(id)}))