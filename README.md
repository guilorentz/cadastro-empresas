# 📊 Aplicação de Cadastro de Empresas

Este projeto é uma aplicação completa para o cadastro, visualização, edição e exclusão de empresas. A aplicação é composta por um backend desenvolvido em Node.js com Nest.js e um frontend desenvolvido em Angular. O backend utiliza Prisma ORM para manipulação de dados e MySQL como banco de dados.

## 🏗 Estrutura do Projeto

- **Backend:** Node.js com Nest.js
- **Frontend:** Angular
- **ORM:** Prisma
- **Banco de Dados:** MySQL

## 🚀 Começando

### Pré-requisitos

Certifique-se de ter o Node.js, Docker e Angular CLI instalados em sua máquina.

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Angular CLI](https://angular.io/cli)

### 📦 Instalando Dependências

#### Backend

```bash
cd backend
npm install
```


#### Frontend

```bash
cd frontend
npm install
```

## 🔧 Instruções para Rodar a Aplicação

### Backend

1. **Inicie o container Docker para o banco de dados:**

```bash
cd backend
docker-compose up -d
```

2. **Execute as migrações do Prisma:**

```bash
npm run prisma:migrate:dev
```

3. **Gere o cliente Prisma:**

```bash
npm run prisma:generate
```

4. **Popule o banco de dados com dados iniciais (seed):**

```bash
npm run seed
```

5. **Inicie o servidor Nest.js:**

```bash
npm run start:dev
```

### Frontend

1. **Inicie o servidor Angular:**

```bash
cd frontend
npm start
```

2. Abra seu navegador e acesse [http://localhost:4200](http://localhost:4200).

## 📜 Scripts Disponíveis

### Backend

- `npm run build`: Compila o projeto.
- `npm run format`: Formata o código com Prettier.
- `npm run start`: Inicia a aplicação.
- `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento.
- `npm run prisma:migrate:dev`: Executa as migrações em modo de desenvolvimento.
- `npm run prisma:migrate:deploy`: Executa as migrações em ambiente de produção.
- `npm run prisma:generate`: Gera o cliente Prisma.
- `npm run prisma:studio`: Abre o Prisma Studio.
- `npm run seed`: Popula o banco de dados com dados iniciais (seed).

### Frontend

- `npm start`: Inicia o servidor de desenvolvimento Angular.
- `npm run build`: Compila o projeto para produção.
- `npm run watch`: Compila o projeto em tempo real.
- `npm run test`: Executa os testes unitários.

## 🎨 Tecnologias Utilizadas

- **Angular**
- **Nest.js**
- **Prisma**
- **MySQL**

## 🤔 Motivo da Escolha das Tecnologias

### Angular

Angular é um framework robusto e completo para a construção de aplicações front-end. Ele oferece uma estrutura bem definida, componentes reutilizáveis e uma forte integração com TypeScript, o que melhora a qualidade do código e a produtividade do desenvolvimento.

### Nest.js

Nest.js é um framework de Node.js que utiliza uma arquitetura modular inspirada no Angular. Ele facilita a criação de aplicações escaláveis e bem estruturadas, além de oferecer suporte nativo para TypeScript e uma integração perfeita com bibliotecas populares como Prisma.

### Prisma

Prisma é um ORM moderno que simplifica o trabalho com banco de dados. Ele oferece um modelo de dados intuitivo e migrações automáticas, o que torna o desenvolvimento mais rápido e seguro. A integração com TypeScript aumenta ainda mais a segurança do tipo e a produtividade.

### MySQL

MySQL é um dos sistemas de gerenciamento de banco de dados mais populares e confiáveis. Ele oferece excelente desempenho, escalabilidade e uma grande comunidade de suporte, o que o torna ideal para aplicações de todos os tamanhos.

## 📞 Contato

Para mais informações, entre em contato através do [go.lorentz@gmail.com](mailto:go.lorentz@gmail.com).

---

Se tiver alguma dúvida ou sugestão, fique à vontade para me contactar. 🚀
