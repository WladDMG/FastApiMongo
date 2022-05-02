def userEntity(item) -> dict:
    return {
        "id":str(item["_id"]),
        "nome":item["nome"],
        "email":item["email"],
        "telefone":item["telefone"],
        "profissão":item["profissão"],
        "senha":item["senha"]
    }

def usersEntity(entity) -> list:
    return [userEntity(item) for item in entity]     
    
def serializeDict(a) -> dict:
    return {**{i:str(a[i]) for i in a if i=='_id'},**{i:a[i] for i in a if i!='_id'}}

def serializeList(entity) -> list:
    return [serializeDict(a) for a in entity]