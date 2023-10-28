# API de Avaliações de Pacotes Turísticos
A API de Avaliações de Pacotes Turísticos é uma aplicação Node.js que desempenha um papel fundamental no desenvolvimento de um sistema de gerenciamento de pacotes turísticos. Ela foi projetada para servir como um microsserviço que lida com as operações de inserção e recuperação de avaliações de clientes sobre os passeios turísticos.

## Visão Geral
A API é uma parte integrante do ecossistema de microsserviços composto por três componentes principais:

- **API Java**: Responsável por gerenciar informações e operações relacionadas a pessoas, passeios, pacotes, pagamentos e outras entidades no sistema.
- **API Node**: Responsável por registrar as avaliações de clientes sobre os passeios.
- **API React**: Responsável por exibir ao usuário as informações fornecidas pelas APIs Node e Java, criando uma integração harmoniosa de microsserviços.

## Tecnologias Utilizadas

A API de Avaliações de Pacotes Turísticos foi elaborada com a finalidade de exercitar a criação de microsserviços e oferecer uma aplicação eficiente para o gerenciamento de avaliações de clientes sobre os passeios turísticos. A seleção de tecnologias específicas para esta API foi fundamental para atingir esse propósito:

- **JavaScript:** A linguagem de programação principal usada no desenvolvimento da aplicação.
- **Node.js:** Plataforma de execução JavaScript do lado do servidor que permite a construção de aplicativos web e APIs.
- **MongoDB:** Banco de dados NoSQL utilizado para armazenar as avaliações dos clientes de forma flexível e escalável.
- **Express:** Framework Node.js que simplifica o desenvolvimento de aplicativos web, incluindo a criação de APIs REST.
- **Outras dependências Node.js comuns:** Consulte o arquivo `package.json` para obter uma lista completa.

Essas tecnologias foram escolhidas para desenvolver uma aplicação eficiente para o gerenciamento de avaliações de pacotes turísticos. O Node.js permite a construção de aplicativos web de alto desempenho, o MongoDB é uma escolha adequada para armazenar dados não estruturados, o Express simplifica o desenvolvimento de APIs e as dependências Node.js comuns fornecem funcionalidades adicionais necessárias para a aplicação.

## Como Iniciar

Siga as etapas a seguir para iniciar o servidor da API localmente:

1. Clone este repositório em sua máquina:
```bash
git clone https://github.com/contii/TopicosAvancados-PasseioTuristicoAPI-Node.git
```
2. Navegue até o diretório do projeto:
```bash
cd TopicosAvancados-PasseioTuristicoAPI-Node
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

## Endpoints
A API oferece os seguintes endpoints para gerenciamento de avaliações de pacotes turísticos:

**GET** /avaliacoes: Recupera todas as avaliações.
**GET** /avaliacoes/: id: Recupera uma avaliação específica por ID.
**POST** /avaliacoes: Insere uma nova avaliação.
**PUT** /avaliacoes/: id: Atualiza uma avaliação existente por ID.
**DELETE** /avaliacoes/: id: Exclui uma avaliação por ID.

---

© 2023 **Joao Conti** | Este projeto faz parte das implementações da disciplina de Tópicos Avançados em Computação do curso de Ciência da Computação da **UTFPR-MD**, ministrada pelo **Prof. Dr. Ricardo Sobjak.**
