# Salvus teste técnico

---

## 🔨 Instalação

### 📝 Requisitos

- [Node.js](https://nodejs.org/pt/download/package-manager)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/downloads)

Clone o repositório com o seguinte comando

```shell
git clone https://github.com/Maycomwill/salvus.git
```

### ⚙️ Configurando ambiente do servidor

Dentro do diretório do servidor (pasta server), crie um arquivo chamado **.env** e adicione os seguintes valores:

```json
DATABASE_URL="postgres://postgres:1234@localhost:5432/salvus"
PGUSER="postgres"
PGPASSWORD="password"
PGHOST="localhost"
PGPORT="5432"
PGDATABASE="salvus"
```

Adicione os valores conforme a configuração do seu banco de dados local

Instale as dependências necessárias com o comando:

```shell
npm install
```

Para confirmar a comunicação com o banco de dados e criar as tabelas necessárias, execute o seguinte comando

```shell
npm run seed
```

Após esse comando, basta utilizar

```shell
npm run dev
```

E o servidor deverá ligar rodando na porta 3333.

### ⚙️ Configurando ambiente da webpage

Dentro do diretório do front-end (pasta web), crie um arquivo chamado **.env** e adicione os seguintes valores:

```json
VITE_API_URL="http://localhost:3333"
```

Instale as dependências necessárias com o comando:

```shell
npm install
```

Após a configuração, basta utilizar o comando para ligar o servidor da web-page localmente

```shell
npm run dev
```

---

## 🌐 Acesso remoto

A aplicação encontra-se disponível online através do [link](https://salvus-web.onrender.com/)

---

## 💻 Tecnologias

![React](https://img.shields.io/badge/React-%2361DAFB?style=flat&logo=react&logoColor=%23333333) ![Prisma](https://img.shields.io/badge/Prisma-%232D3748?style=flat&logo=prisma&logoColor=%23ffffff) ![TypeScript](https://img.shields.io/badge/TypeScript-%233178C6?style=flat&logo=typescript&logoColor=%23ffffff) ![TaiwindCSS](https://img.shields.io/badge/TailwindCSS-%2306B6D4?style=flat&logo=tailwindcss&logoColor=%23ffffff) ![Axios](https://img.shields.io/badge/Axios-%235A29E4?style=flat&logo=axios&logoColor=%23ffffff) ![Postgresql](https://img.shields.io/badge/Postgresql-%234169E1?style=flat&logo=postgresql&logoColor=%23ffffff) ![Zod](https://img.shields.io/badge/Zod-%233E67B1?style=flat&logo=zod&logoColor=%23ffffff) ![Express](https://img.shields.io/badge/Express-%23000000?style=flat&logo=express&logoColor=%23ffffff)


___

## Créditos

Projeto desenvolvido por [Maycom Willams](https://maycomwill.vercel.app/)

