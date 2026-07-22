# Cypress Automation Framework

Framework de automação de testes desenvolvido para o desafio técnico da Mouts/Ambev utilizando Cypress, JavaScript e Cucumber (BDD).

---

## Tecnologias

- Cypress
- JavaScript (ES6+)
- Cucumber / Gherkin
- Page Object Model (POM)
- Factory Pattern
- Actions Pattern
- Service Layer
- Faker
- Git

---

## Arquitetura

O projeto foi estruturado buscando separar responsabilidades e facilitar manutenção.

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

### Estrutura

```
cypress
│
├── actions
├── e2e
│   ├── api
│   └── frontend
├── factories
├── fixtures
├── pages
│   └── common
├── services
├── support
└── utils
```

---

## Padrões utilizados

- Page Object Model
- Factory Pattern
- Service Layer
- Base Page
- Actions Layer
- Common Steps
- Constantes centralizadas
- Massa de testes desacoplada
- Reutilização de componentes

---

## Funcionalidades implementadas

### Frontend

#### Login

- Login com sucesso
- Login inválido
- Validação de campos obrigatórios
- Preparação dinâmica da massa de dados via API para o cenário positivo

#### Cadastro

- Cadastro com sucesso
- Nome obrigatório
- Email obrigatório
- Senha obrigatória
- Validação de email duplicado
- Preparação automática da massa de dados para validação de email duplicado

### API

- Camada inicial de Services para preparação de massa de dados

---

## Recursos implementados

- BasePage
- UserService
- Common Steps
- Hooks (Before)
- Massa dinâmica utilizando Faker
- Centralização de URLs
- Centralização de mensagens
- Reutilização de componentes

---

## Como executar

Instalar dependências

```bash
npm install
```

Executar interface gráfica

```bash
npx cypress open
```

Executar todos os testes

```bash
npx cypress run
```

Executar Login

```bash
npx cypress run --spec cypress/e2e/frontend/features/login.feature
```

Executar Cadastro

```bash
npx cypress run --spec cypress/e2e/frontend/features/register.feature
```

---

## Processo de investigação

Durante o desenvolvimento foi encontrada uma divergência entre as mensagens esperadas e as mensagens exibidas pela aplicação.

Todo o processo de investigação está documentado em:

```
docs/investigations/login-validation.md
```

---

## Decisões de Arquitetura

Durante o desenvolvimento foram adotadas algumas decisões visando escalabilidade e manutenção do framework:

- Separação entre Actions, Pages, Services e Factories.
- Preparação de massa de dados via API através da camada de Services.
- Reutilização de Step Definitions comuns.
- Geração de usuários dinâmicos utilizando Faker.
- Centralização de mensagens e URLs da aplicação.

---

## Próximos passos

- Automação de API
- Produtos
- Carrinho
- Checkout
- Relatórios
- CI/CD