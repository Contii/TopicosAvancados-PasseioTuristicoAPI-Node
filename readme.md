# API de Avaliações de Pacotes Turísticos

A API de Avaliações de Pacotes Turísticos é uma aplicação Node.js que desempenha um papel fundamental no desenvolvimento de um sistema de gerenciamento de pacotes turísticos. Ela foi projetada para servir como um microsserviço que lida com as operações de inserção e recuperação de avaliações de clientes sobre os passeios turísticos.

## Visão Geral

A API é parte integrante de um ecossistema maior composto por três microsserviços:

- **API Node**: Responsável por gerenciar as avaliações de clientes.
- **API Java**: Encarregada de tratar outras solicitações e operações do sistema.
- **API React**: Responsável por exibir ao usuário as informações fornecidas pelas APIs Node e Java, criando uma integração harmoniosa de microsserviços.

## Tecnologias Utilizadas

A API de Avaliações de Pacotes Turísticos é construída com as seguintes tecnologias:

- Node.js: Plataforma de execução JavaScript do lado do servidor.
- MongoDB: Banco de dados NoSQL usado para armazenar as avaliações de clientes.
- Express: Framework Node.js que facilita o desenvolvimento de aplicativos web.
- Outras dependências Node.js comuns: consulte o arquivo `package.json` para obter uma lista completa.

## Como Iniciar

Siga as etapas a seguir para iniciar o servidor da API localmente:

1. Clone este repositório em sua máquina:
```bash
git clone https://github.com/seu-usuario/api-avaliacoes-pacotes-turisticos.git
```
2. Navegue até o diretório do projeto:
```bash
cd api-avaliacoes-pacotes-turisticos
```
3. Instale as dependências usando npm (Node.js Package Manager):
```bash
npm install
```
4. Inicie o servidor da API:
```bash
npm start
```
	
A API estará disponível em http://localhost:3000.

Endpoints
A API oferece os seguintes endpoints para gerenciamento de avaliações de pacotes turísticos:

**GET** /avaliacoes: Recupera todas as avaliações.
**GET** /avaliacoes/:id: Recupera uma avaliação específica por ID.
**POST** /avaliacoes: Insere uma nova avaliação.
**PUT** /avaliacoes/:id: Atualiza uma avaliação existente por ID.
**DELETE** /avaliacoes/:id: Exclui uma avaliação por ID.

© 2023 **Joao Conti** | Este projeto faz parte das implementações da disciplina de Tópicos Avançados em Computação do curso de Ciência da Computação da **UTFPR-MD**, ministrada pelo **Prof. Dr. Ricardo Sobjak.**