# Lista de tarefas 
## Modelo - v0.1 - Carregando via arquivo JSON.
### Tecnologias utilizadas: 
[![Node.js](https://img.shields.io/badge/node.js-20-brightgreen)](https://nodejs.org/)
[![ExpressJS](https://img.shields.io/badge/express-4-brightgreen)](https://expressjs.com/)
[![Swagger](https://img.shields.io/badge/swagger-0.7.5-brightgreen)](https://www.npmjs.com/package/swagger)
[![Knex](https://img.shields.io/badge/knex-3.1-brightgreen)](https://www.npmjs.com/package/knex)
[![Pg](https://img.shields.io/badge/postgressql-8.13-brightgreen)](https://www.npmjs.com/package/pg)
### Lista de afazeres
- [] Criar o arquivo de dados tipo JSON
```JSON
  "Clients"
  {
    "id": number,
    "name": string,
    "age": string,
    "gender": string
  }
 
  "Products"
  { 
    "id": number, 
    "name": string, 
    "price": number 
  }
  
  "Employeers"
  { 
    "id": number,
    "name": string,
    "position": string
  }
- ```
- [] Criar as camadas padrões de camadas.

**Diagrama da Estrutura:**

```mermaid
A - controllers
B - services
C - routes
D - model
E - App
    subgraph src
        A --> B
        B --> C
        C --> D **Não necessario utilizar models com javascript vanilla
        A --> E
        E --> F
    end

    project-root --> src
    project-root --> data
    project-root --> README.md
    project-root --> package.json
```
- [] Variações das rotas:
```mermaid
##Clients
GET /clients --- Exibir todos os clientes disponiveis
GET /clients/id --- Exibir somente o cliente que foi informado no parametro.
POST /clients --- cadastrar um novo cliente
PUT /clients/id --- Atualizar o cadastro do cliente.

##Products
GET /products --- Exibir todos os produtos disponiveis
GET /products/id --- Exibir somente o produtos que foi informado no parametro.
POST /products --- cadastrar um novo produtos
PUT /products/id --- Atualizar o cadastro do produtos.

##Employeers
GET /employeer/id --- Exibir somente o funcionario que foi indicado.
POST /employeer --- cadastrar um novo funcionario
PUT /employeer/id --- Atualizar o cadastro do funcionario.
```
- [] Aplicar regras de negocio
- - Não é possivel cadastrar clientes com o mesmo ID.
- - Não é possivel cadastrar produtos com o mesmo ID.
- - Não é possivel cadastrar funcionarios com o mesmo ID.

- [] Criar documentação via swagger
```mermaid
    Documentação deverá estar sendo encaminhado para "docs" na pasta raiz do projeto.
```
### Até esse momento será realizado a versão 1.0 (basica aplicação)

## Modelo - v1.0 - Carregando via arquivo banco de dados - PostregreSQL.

- [] Adicionar biblioteca para acessar banco de dados PostgresSql.
- [] Adicionar biblioteca para comunicação abstrata com banco (Knex)
- [] Criar o processo de criação das tabelas (clients, products, employeers)
- [] Realizar a migração dos dados no JSON para as respectivas tabelas.
- [] Apagar o arquivo JSON de dados e utilizar o banco de dados.

## Modelo - v1.1 - Adicionado "middleware-chain" com Consign
- [] Importar a biblioteca "consign".
- [] Configurar consign.
- [] Refatorar as rotas e middlewares.

## Modelo - 1.2 - Adicionando testes unitarios com Jest.
- [] Importar a biblioteca Jest.
- [] Escrever teste unitario para cada end point respeitando as regras da rota.
