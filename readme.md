# API de Avaliações de Pacotes Turísticos
A API de Avaliações de Pacotes Turísticos é uma aplicação Node.js que desempenha um papel fundamental no desenvolvimento de um sistema de gerenciamento de pacotes turísticos. Ela foi projetada para servir como um microsserviço que lida com as operações de inserção e recuperação de avaliações de clientes sobre os passeios turísticos.

## Visão Geral
A API é uma parte integrante do ecossistema de microsserviços composto por três componentes principais:

- **API Java**: Responsável por gerenciar informações e operações relacionadas a pessoas, passeios, pacotes, pagamentos e outras entidades no sistema.
- **API Node**: Responsável por registrar as avaliações de clientes sobre os passeios.
- **API React**: Responsável por exibir ao usuário as informações fornecidas pelas APIs Node e Java, criando uma integração harmoniosa de microsserviços.

## Tecnologias Utilizadas

A API de Avaliações de Pacotes Turísticos foi elaborada com a finalidade de exercitar a criação de microsserviços e oferecer uma aplicação eficiente para o gerenciamento de avaliações de clientes sobre os passeios turísticos. A seleção de tecnologias específicas para esta API foi fundamental para atingir esse propósito:

- **JavaScript: ** A linguagem de programação principal usada no desenvolvimento da aplicação.
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

####Pessoas:

**GET** /person: Recupera todas as informações sobre pessoas.

**GET** /person/:id: Recupera informações de uma pessoa específica por ID.

**POST** /person: Insere informações sobre uma nova pessoa.

**PUT** /person/:id: Atualiza informações de uma pessoa existente por ID.

**DELETE** /person/:id: Exclui as informações de uma pessoa por ID.

- - -
####Passeios:

**GET** /passeio: Recupera todas as informações sobre passeios.

**GET** /passeio/: id: Recupera informações de um passeio específico por ID.

**POST** /passeio: Insere informações sobre um novo passeio.

**PUT** /passeio/: id: Atualiza informações de um passeio existente por ID.

**DELETE** /passeio/: id: Exclui as informações de um passeio por ID.

---

####Pacotes:

**GET** /pacote: Recupera todas as informações sobre pacotes.

**GET** /pacote/: id: Recupera informações de um pacote específico por ID.

**POST** /pacote: Insere informações sobre um novo pacote.

**PUT** /pacote/: id: Atualiza informações de um pacote existente por ID.

**DELETE** /pacote/: id: Exclui as informações de um pacote por ID.

---

####Pagamentos:

**GET** /pagamento: Recupera todas as informações sobre pagamentos.

**GET** /pagamento/: id: Recupera informações de um pagamento específico por ID.

**POST** /pagamento: Insere informações sobre um novo pagamento.

**PUT** /pagamento/: id: Atualiza informações de um pagamento existente por ID.

**DELETE** /pagamento/: id: Exclui as informações de um pagamento por ID.

---

####Reservas:

**GET** /reserva: Recupera todas as informações sobre reservas.

**GET** /reserva/:id: Recupera informações de uma reserva específica por ID.

**POST** /reserva: Insere informações sobre uma nova reserva.

**PUT** /reserva/:id: Atualiza informações de uma reserva existente por ID.

**DELETE** /reserva/:id: Exclui as informações de uma reserva por ID.

© 2023 **Joao Conti** | Este projeto faz parte das implementações da disciplina de Tópicos Avançados em Computação do curso de Ciência da Computação da **UTFPR-MD**, ministrada pelo **Prof. Dr. Ricardo Sobjak.**
