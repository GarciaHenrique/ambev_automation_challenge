# Arquitetura

## Visão Geral

Este projeto foi desenvolvido seguindo princípios de engenharia de software com foco em escalabilidade, manutenção e reutilização de código.

A arquitetura foi dividida em camadas independentes, onde cada uma possui uma responsabilidade específica, reduzindo o acoplamento entre os componentes e facilitando a evolução do framework.

---

# Arquitetura Frontend

A automação Frontend segue o fluxo abaixo.

```
Feature
    ↓
Step Definition
    ↓
Action
    ↓
Page
    ↓
BasePage
```

## Responsabilidade de cada camada

### Feature

Representa o comportamento esperado da aplicação utilizando Gherkin.

Exemplo:

```gherkin
Scenario: Add product to shopping list

Given I am logged in
When I add the first product to the shopping list
And I open the shopping list
Then the product should be displayed in the shopping list
```

As Features descrevem **o comportamento esperado** da aplicação sem expor detalhes técnicos da implementação.

---

### Step Definition

É a camada responsável por conectar o Gherkin com a automação.

Responsabilidades:

- Interpretar os passos descritos na Feature.
- Acionar a camada de Actions.
- Compartilhar informações entre os Steps quando necessário.
- Manter a Feature limpa e legível.

Os Steps não possuem lógica de interface nem regras de negócio.

---

### Action

Representa o fluxo de negócio da aplicação.

Responsabilidades:

- Orquestrar chamadas para uma ou mais Pages.
- Centralizar regras de negócio do cenário.
- Evitar que os Steps conheçam detalhes da implementação.

Exemplo:

```
ProductsActions

↓

Captura o nome do produto

↓

Adiciona o produto

↓

Abre a Lista de Compras

↓

Realiza a validação
```

---

### Page

Responsável exclusivamente pelas interações com a interface.

Responsabilidades:

- Mapear elementos.
- Executar ações na tela.
- Encapsular seletores.

Exemplo:

```
LoginPage

↓

fillEmail()

↓

fillPassword()

↓

clickLogin()
```

A camada de Page não deve conter regras de negócio.

---

### BasePage

Centraliza operações comuns utilizadas por todas as páginas.

Exemplos:

- click()
- type()
- clear()
- shouldContain()
- shouldBeVisible()
- shouldHaveUrl()

Isso reduz duplicação de código e padroniza as interações com o Cypress.

---

# Arquitetura da API

A automação das APIs segue uma arquitetura semelhante.

```
Feature
    ↓
Step Definition
    ↓
ApiAction
    ↓
Service
    ↓
BaseService
```

---

## ApiAction

Responsável pelos fluxos de negócio da API.

Responsabilidades:

- Orquestrar chamadas entre Services.
- Preparar massa de dados.
- Esconder detalhes de implementação dos Steps.

Exemplo:

```
LoginApiActions

↓

Criar usuário válido

↓

Realizar autenticação

↓

Retornar resposta
```

---

## Service

Responsável apenas pela comunicação HTTP.

Responsabilidades:

- GET
- POST
- PUT
- DELETE

A camada de Service não realiza validações nem contém regras de negócio.

Exemplo:

```
UserService.create()

↓

POST /usuarios
```

---

## BaseService

Centraliza métodos HTTP reutilizados pelos Services.

Exemplos:

- get()
- post()
- put()
- delete()

Essa camada reduz duplicação de código e padroniza a comunicação com as APIs.

---

# Factory Pattern

As Factories são responsáveis pela geração da massa de testes.

Responsabilidades:

- Criar objetos válidos.
- Criar objetos inválidos.
- Centralizar o uso do Faker.

Exemplo:

```
UserFactory

↓

Usuário válido

↓

Usuário inválido
```

Dessa forma, os dados de teste permanecem desacoplados dos cenários.

---

# Constants

As constantes da aplicação foram centralizadas para facilitar manutenção e reutilização.

Atualmente são centralizados:

- URLs
- Mensagens
- Tipos de usuário
- Tipos de registro
- Tipos de validação

Isso evita duplicação de informações ao longo do projeto.

---

# Massa de Testes

A massa de testes é criada dinamicamente utilizando Faker sempre que possível.

Vantagens:

- Execução independente dos cenários.
- Redução de conflitos entre execuções.
- Eliminação de usuários fixos.
- Facilidade de manutenção.

---

# Common Steps

Foram criados Steps reutilizáveis para evitar duplicação de código.

Exemplo:

```
Given I am logged in
```

Esse Step prepara um usuário via API, realiza a autenticação e pode ser reutilizado por qualquer cenário que necessite de um usuário autenticado.

---

# Princípios utilizados

## Single Responsibility Principle (SRP)

Cada camada possui apenas uma responsabilidade.

Exemplo:

- Pages → Interface
- Actions → Fluxo de negócio
- Services → Comunicação HTTP
- Factories → Massa de testes

---

## Separation of Concerns

As responsabilidades foram separadas entre interface, regras de negócio e comunicação com APIs.

Isso torna o framework mais organizado e facilita futuras manutenções.

---

## Reutilização

Os principais componentes reutilizáveis do projeto são:

- BasePage
- BaseService
- Actions
- Factories
- Common Steps

---

## Manutenibilidade

Alterações em seletores, endpoints ou mensagens normalmente são realizadas em apenas um local do projeto, reduzindo impacto sobre os cenários existentes.

---

# Estrutura do Projeto

```
cypress
│
├── actions
│   ├── api
│   └── frontend
│
├── constants
│
├── e2e
│   ├── api
│   └── frontend
│
├── factories
├── fixtures
├── pages
│   └── common
│
├── reports
├── schemas
├── screenshots
├── services
│   └── common
│
├── support
└── videos
```

---

# Por que essa arquitetura?

A arquitetura foi definida para:

- Reduzir duplicação de código.
- Facilitar manutenção.
- Separar responsabilidades.
- Favorecer reutilização de componentes.
- Permitir a evolução do framework sem impactar os cenários existentes.
- Manter o código organizado e de fácil entendimento.