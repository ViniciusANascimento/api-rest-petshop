# API Petshop

## Visão Geral
Esta API tem como objetivo gerenciar informações sobre um petshop, incluindo clientes, produtos e funcionários.

## Tecnologias
* **Backend:** Node.js, Express.js
* **Banco de dados:** PostgreSQL
* **Ferramentas:** Knex, Swagger, Jest

## Roadmap
### Versão 0.1 - MVP (Mínimo Produto Viável)
* **Objetivo:** Implementar as funcionalidades básicas da API, utilizando um arquivo JSON para armazenar os dados.
* **Funcionalidades:**
    * Cadastro, leitura, atualização e deleção de clientes, produtos e funcionários.
    * Regras de negócio básicas (ex: ID único para cada registro).
    * Documentação da API utilizando Swagger.

### Versão 1.0 - Migração para Banco de Dados
* **Objetivo:** Migrar os dados do arquivo JSON para um banco de dados PostgreSQL.
* **Funcionalidades:**
    * Criação das tabelas no banco de dados.
    * Migração dos dados existentes.
    * Remoção do arquivo JSON.

### Versão 1.1 - Melhorias de Arquitetura
* **Objetivo:** Melhorar a organização do código e a manutenibilidade da aplicação.
* **Funcionalidades:**
    * Utilização do Consign para organizar as rotas e middlewares.

### Versão 1.2 - Cobertura de Testes
* **Objetivo:** Garantir a qualidade do código através de testes unitários.
* **Funcionalidades:**
    * Implementação de testes unitários para todas as rotas e funcionalidades da API utilizando Jest.
