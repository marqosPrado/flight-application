# 📦 Documentação — Flight Application API

API de gerenciamento de voos, desenvolvida com Node.js 22, Express, TypeORM e PostgreSQL, utilizando Docker para facilitar o ambiente de execução.

-------

### Tecnologias utilizadas

* Typescript
* Express
* NodeJs - v22
* Typeorm
* PostgreSQL
* Docker
* Docker Compose

-------
### 🔧 Requisitos

Antes de iniciar, você precisa ter instalado:

✅ Docker\
✅ Docker Compose\
✅ Node.js 22\

-------

### ⚙️ Configuração do Ambiente

Crie um arquivo .env na raiz do projeto:

```ini
NODE_ENV=development

DATABASE_HOST=database-flight-application
DATABASE_PORT=5432
POSTGRES_USER=seu_usuario
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=seu_banco
```

Substitua seu_usuario, sua_senha e seu_banco conforme desejar.

------

### 🐳 Subindo o Banco de Dados (PostgreSQL)

No terminal, execute:

```init
docker compose up -d
```

Isso irá:

✅ Criar o container database-flight-application\
✅ Expor a porta 5432 do PostgreSQL\
✅ Criar volume persistente para os dados\

-------

### 🧩 Executar o projeto:

1. Banco de dados precisa estar rodando via Docker (docker compose up -d).

2. Instale dependências:

```ini
$ npm install
```

#### Gere o build:

```ini
$ npm run build
```

#### Inicie em modo produção:

```ini
$ npm run start:prod
```

#### Ou em modo desenvolvimento (hot-reload):

```ini
$ npm run start:dev
```

### 📂 Migrations e Seeds

Após o banco estar online, você pode gerar e rodar migrations:

#### Gerar migration
```ini
$ npm run migration:generate
```

#### Rodar migrations pendentes
```ini
$ npm run migration:run
```

Além disso, o arquivo seed.ts é executado automaticamente ao subir o servidor, inserindo dados iniciais.