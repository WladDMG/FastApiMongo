# FastApiMongo

<p align="center">
  <a href="https://fastapi.tiangolo.com/" target="_blank">
    <img src="https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white&style=for-the-badge" alt="FastAPI" />
  </a>
  &nbsp;
  <a href="https://www.mongodb.com/" target="_blank">
    <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" alt="MongoDB" />
  </a>
  &nbsp;
  <a href="https://www.uvicorn.org/" target="_blank">
    <img src="https://img.shields.io/badge/Uvicorn-4A4A4A?style=for-the-badge&logo=python&logoColor=white" alt="Uvicorn" />
  </a>
  &nbsp;
  <a href="https://expo.dev/" target="_blank">
    <img src="https://img.shields.io/badge/Expo-1B1F23?logo=expo&logoColor=white&style=for-the-badge" alt="Expo" />
  </a>
  &nbsp;
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge" alt="Node.js" />
  </a>
  &nbsp;
  <a href="https://yarnpkg.com/" target="_blank">
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white&style=for-the-badge" alt="Yarn" />
  </a>
</p>

API construída com FastAPI e MongoDB.

---

## Requisitos da API

- Python instalado (recomendo 3.8+)
- MongoDB Community Server instalado e rodando (local ou remoto)

---

## Configuração do ambiente e dependências

### Criar e ativar ambiente virtual

Para Linux/Mac:

```
python3 -m venv venv
source venv/bin/activate
```

Para Windows (PowerShell):

```
python -m venv venv
.\venv\Scripts\Activate.ps1
```

Para Windows (cmd):

```
python -m venv venv
.\venv\Scripts\activate.bat
```

---

### Instalar dependências Python

```
pip install fastapi uvicorn pymongo pymongo[srv]
```

---

## Executar servidor FastAPI

```
uvicorn index:app --reload
```

A aplicação ficará disponível em: [http://localhost:8000](http://localhost:8000)



## Requisitos do Frontend

- Node.js instalado (versão LTS recomendada)
- Expo CLI instalado globalmente
- Yarn instalado globalmente (opcional, mas recomendado)

---

## Instalar dependências frontend

```
npm install --global expo-cli
npm install --global yarn
```

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
