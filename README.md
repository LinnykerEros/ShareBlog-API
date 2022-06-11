<h1> APIRestful-NodeJS-Express-Prisma-JWT </h1>

<h2>Sobre</h2>
<p> <strong>Fiz esse projeto com o intuito de aprender a como fazer uma autenticação com JWT, e também consolidar ainda mais meus conhecimentos sobre o NodeJS, JWT e a ORM(PRISMA). </strong></p>

<h2>Tecnologias</h2>
<ul>
   <li>NodeJS</li>
   <li>Express</li>
   <li>Prisma</li>
   <li>JWT</li>
</ul>

### Funcionalidades

- [x] Integração do Prisma com o banco Postgresql
- [x] Criação de tabela User com a ORM Prisma
- [x] CRUD de Users
- [x] Verificações
- [x] Autenticação JWT
- [x] Criptofrafia do password com bcryptjs
- [x] Middleware de login
- [x] Middleware de permissão admin 

---

<h3> Acesse o projeto através dos comandos a baixo 👇</h3>

```bash

# Clone este repositório
$ git clone https://github.com/LinnykerEros/APIRestful-NodeJS-Express-Prisma-JWT.git

# Acesse a pasta do projeto no terminal/cmd
$ cd APIRestful-NodeJS-Express-Prisma-JWT

# Instale as dependências
$ npm install

# Crie um arquivo .env com os arquivos
- DATABASE_URL="a url do seu banco"
- TOKEN_SECRET="uma chave só sua, pode ser um hash aleatório"
- TOKEN_EXPIRATION=1d(aqui varia, você decide quanto tempo para o token expirar)

# Conecte o Prisma com o seu banco, no arquivo
- schema.prisma

# Faça as migrates do Prisma a partir do comando
$ npx prisma migrate dev  

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor iniciará na porta:3030 - acesse <http://localhost:3030>
```
