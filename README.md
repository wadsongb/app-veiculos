# 🚗 API de Veículos

API RESTful desenvolvida em **Node.js** com **TypeScript**, utilizando **TypeORM** para persistência de dados e **PostgreSQL**.  
O projeto segue boas práticas de **POO**, **SOLID** e arquitetura em camadas (**Controller → Service → Entity**).  
Pode ser executado **localmente** ou dentro de containers **Docker**.

---

## 🧩 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript
- **TypeScript** — Tipagem estática e segurança de código
- **Express** — Framework minimalista para APIs REST
- **TypeORM** — ORM para integração com o PostgreSQL
- **PostgreSQL** — Banco de dados relacional
- **Docker & Docker Compose** — Containers para a API e o banco
- **VSCode REST Client** — Testes diretos das rotas

---

## 📁 Estrutura do Projeto

```
api-veiculos/
├── src/
│   ├── controllers/
│   │   └── veiculo.controller.ts
│   ├── entities/
│   │   └── veiculo.entity.ts
│   ├── routes/
│   │   └── veiculo.routes.ts
│   ├── services/
│   │   └── veiculo.service.ts
│   ├── data-source.ts
│   └── server.ts
├── docker-compose.yml
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Arquivo `.env`

Exemplo de configuração para rodar localmente **ou** com Docker.

```env
# 🔧 Configuração geral
PORT=3000

# 🐘 Configuração do banco (Docker ou local)
DB_HOST=db              # Se estiver usando Docker, use "db"
# DB_HOST=localhost     # Se rodar localmente, descomente esta linha
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=veiculosdb

# 🔄 TypeORM
DB_SYNC=true
```

> 💡 **Dica:**  
> Quando executar via Docker, mantenha `DB_HOST=db`.  
> Quando executar localmente, altere para `DB_HOST=localhost`.

---

## 🐳 Executando com Docker

### 1️⃣ Subir containers da API e banco

```bash
docker-compose up -d
```

### 2️⃣ Ver logs da aplicação

```bash
docker logs -f api_veiculos
```

A API ficará disponível em:  
👉 **http://localhost:3000**

---

## 💻 Executando Localmente (sem Docker)

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Criar o banco no PostgreSQL

Crie manualmente o banco `veiculosdb` (ou o nome definido no `.env`).

### 3️⃣ Executar em modo desenvolvimento

```bash
npm run dev
```

ou

```bash
npm run start:dev
```

---

## 📡 Endpoints da API

| Método | Rota | Descrição |
|--------|-------|------------|
| **POST** | `/veiculos` | Cadastrar novo veículo |
| **GET** | `/veiculos` | Listar todos os veículos |
| **GET** | `/veiculos/:id` | Buscar veículo por ID |
| **GET** | `/veiculos/placa/:placa` | Buscar veículo pela placa |
| **GET** | `/veiculos/formatado` | Listar veículos com formato customizado |
| **GET** | `/veiculos/:id/formatado` | Exibir veículo único formatado |
| **PUT** | `/veiculos/:id` | Atualizar um veículo existente |
| **DELETE** | `/veiculos/:id` | Remover um veículo |

---

## 🧾 Exemplos de Requisição

### ➕ Criar veículo

```http
POST http://localhost:3000/veiculos
Content-Type: application/json

{
  "placa": "ABC-1234",
  "modelo": "Civic",
  "ano": 2021,
  "cor": "Azul"
}
```

### 🔍 Buscar veículo formatado por ID

```http
GET http://localhost:3000/veiculos/1/formatado
```

**Resposta:**

```json
"Civic / (2021) - Placa: ABC-1234 - Cor Azul"
```

---

## 🧠 Conceitos Aplicados

- **Programação Orientada a Objetos (POO)**  
  → Classes, encapsulamento e métodos de entidade (`exibir()`).

- **Princípios SOLID**  
  - **S**ingle Responsibility: cada classe com responsabilidade única  
  - **O**pen/Closed: serviços e entidades extensíveis sem modificação direta  
  - **L**iskov Substitution: uso de abstrações coerentes  
  - **I**nterface Segregation: interfaces leves e específicas  
  - **D**ependency Inversion: serviços dependem de abstrações

- **Arquitetura em Camadas**
  ```
  Controller → Service → Repository (TypeORM)
  ```

- **TypeORM + PostgreSQL** com `DataSource` configurado dinamicamente  
- **Containers Docker** isolando API e banco  
- **VSCode REST Client** para testes rápidos de endpoints

---

## 🧑‍💻 Autor

**Wadson Guimarães**  
💼 Analista de Sistemas | Node.js | TypeScript | SQL | Angular  
🔗 [LinkedIn](https://www.linkedin.com/in/wadsonguimaraes)

---

## 📝 Licença

Projeto licenciado sob a **MIT License** — sinta-se livre para usar, estudar e melhorar.  
Contribuições são sempre bem-vindas! 🚀
