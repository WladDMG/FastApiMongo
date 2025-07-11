# FastApiMongo

API construída com FastAPI e MongoDB.

---

## Requisitos da API

- Python instalado (recomendo 3.8+)
- MongoDB Community Server instalado e rodando (local ou remoto)

---

## Configuração do ambiente e dependências

### Criar e ativar ambiente virtual

Para Linux/Mac:


python3 -m venv venv
source venv/bin/activate


Para Windows (PowerShell):


python -m venv venv
.\venv\Scripts\Activate.ps1


Para Windows (cmd):


python -m venv venv
.\venv\Scripts\activate.bat


---

### Instalar dependências Python


pip install fastapi uvicorn pymongo pymongo[srv]


---

## Executar servidor FastAPI


uvicorn index:app --reload


A aplicação ficará disponível em: [http://localhost:8000](http://localhost:8000)



## Requisitos do Frontend

- Node.js instalado (versão LTS recomendada)
- Expo CLI instalado globalmente
- Yarn instalado globalmente (opcional, mas recomendado)

---

## Instalar dependências frontend


npm install --global expo-cli
npm install --global yarn


---

## Executar frontend

```
expo start
```

---

## Observações

- Certifique-se de que o MongoDB está rodando antes de iniciar a API.
- A API está preparada para comunicação com frontend Expo (React Native).
- Para usar banco MongoDB remoto (Atlas), configure a URI no código da API.

---

## Tecnologias utilizadas

- FastAPI
- MongoDB
- Uvicorn
- Expo (React Native)
- Node.js
- Yarn

---

## Autor

Wladmir Silveira  
📧 wladdmg@gmail.com  
🌐 https://github.com/WladDMG  
