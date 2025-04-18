# 🍍 Fruit API Gateway

Este projeto é uma API feita com **Node.js**, **Express** e **TypeScript**, que atua como um gateway para buscar dados de frutas da [API Fruityvice](https://www.fruityvice.com/). O projeto também utiliza o **Zod** para validação de dados recebidos.

---

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript
- [Express](https://expressjs.com/) — Framework web para Node.js
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática
- [Zod](https://zod.dev/) — Validador de schemas e parser de dados
- [ts-node](https://typestrong.org/ts-node/) — Executa arquivos TypeScript diretamente no Node.js
- [nodemon](https://nodemon.io/) — Reinicia automaticamente a aplicação durante o desenvolvimento
- [dotenv](https://github.com/motdotla/dotenv) — Carrega variáveis de ambiente a partir de um arquivo `.env`

---

## 🚀 Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/gabrielpovoa/fruit-api.git
   cd fruit-api

2. **Instale as dependências:**
    ```
    npm install
    ```

2. **Inicie o servidor:**
    ```
    npm run dev
    ``` 

O servidor será iniciado em `http://localhost:3000`

## 🧪 Endpoints Disponíveis

> GET ```/fruits?fruit=banana```

> Busca uma fruta específica pela API externa e valida os dados com Zod.GET /fruits?fruit=banana

> Query Params:
> fruit (string): nome da fruta em inglês.

> Exemplo de Requisição:
 `http://localhost:3000/fruits?fruit=banana`

## 📌 Observações
- A API externa não exige autenticação.
- Se o nome da fruta for inválido, a API pode retornar erro ou objeto vazio, por isso usamos o safeParse do Zod.