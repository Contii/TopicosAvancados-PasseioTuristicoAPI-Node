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

Essas tecnologias foram escolhidas para desenvolver uma aplicação eficaz e eficiente para o gerenciamento de avaliações de pacotes turísticos. O Node.js permite a construção de aplicativos web de alto desempenho, o MongoDB é uma escolha adequada para armazenar dados não estruturados, o Express simplifica o desenvolvimento de APIs e as dependências Node.js comuns fornecem funcionalidades adicionais necessárias para a aplicação.

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
3. Compile e execute o aplicativo usando Gradle:
```bash
./gradlew bootRun
```
A API estará disponível em http://localhost:8080.

## Endpoints

A API de Gerenciamento do Sistema Turístico oferece os seguintes endpoints para manipulação de informações relacionadas a pessoas, passeios, pacotes, pagamentos e outras entidades:

### Pessoas:

**GET** /person: Recupera todas as informações sobre pessoas.

**GET** /person/: id: Recupera informações de uma pessoa específica por ID.

**POST** /person: Insere informações sobre uma nova pessoa.

**PUT** /person/: id: Atualiza informações de uma pessoa existente por ID.

**DELETE** /person/: id: Exclui as informações de uma pessoa por ID.

Os end-points das outras classes seguem o mesmo padrão e podem ser consultados na documentação do swagger.

---

© 2023 **Joao Conti** | Este projeto faz parte das implementações da disciplina de Tópicos Avançados em Computação do curso de Ciência da Computação da **UTFPR-MD**, ministrada pelo **Prof. Dr. Ricardo Sobjak.**
