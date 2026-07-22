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

O projeto foi estruturado buscando separar responsabilidades, facilitar manutenção e promover reutilização de código.

### Frontend

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

### API

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

## Estrutura

```
.
├── .github
│   └── workflows
│
├── cypress
│   ├── actions
│   │   ├── api
│   │   └── frontend
│   │
│   ├── constants
│   │   ├── Messages.js
│   │   ├── RegisterTypes.js
│   │   ├── Urls.js
│   │   ├── UserTypes.js
│   │   └── ValidationTypes.js
│   │
│   ├── e2e
│   │   ├── api
│   │   │   ├── features
│   │   │   └── step_definitions
│   │   │
│   │   └── frontend
│   │       ├── features
│   │       └── step_definitions
│   │
│   ├── factories
│   ├── fixtures
│   ├── pages
│   │   └── common
│   │
│   ├── reports
│   ├── schemas
│   ├── screenshots
│   ├── services
│   │   └── common
│   │
│   ├── support
│   └── videos
│
├── docs
│   └── investigations
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Padrões utilizados

- Page Object Model (POM)
- Factory Pattern
- Service Layer
- Actions Layer
- Base Page
- Base Service
- Common Steps
- Constants Pattern
- Massa de testes desacoplada
- Reutilização de componentes
- Separação de responsabilidades

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

#### Lista de Compras

- Adição de produto à lista de compras
- Captura dinâmica do nome do produto selecionado
- Navegação para Lista de Compras
- Validação de que o produto exibido na lista corresponde ao produto selecionado

### API

#### Login

- Login com credenciais válidas
- Login com credenciais inválidas
- Validação do status code
- Validação da mensagem retornada
- Validação do token de autenticação

#### Usuários

- Criação de usuário com sucesso
- Validação de usuário duplicado
- Preparação dinâmica da massa utilizando Faker

#### Produtos

- Consulta da lista de produtos
- Validação do status code
- Validação dos atributos retornados pela API

---

## Recursos implementados

- BasePage
- BaseService
- LoginService
- UserService
- ProductService
- LoginApiActions
- UserApiActions
- ProductApiActions
- Common Steps
- Hooks (Before)
- Massa dinâmica utilizando Faker
- Centralização de constantes da aplicação
  - URLs
  - Mensagens
  - Tipos de usuário
  - Tipos de registro
  - Tipos de validação
- Reutilização de componentes
- Preparação de usuários via API para testes Frontend
- Reutilização de autenticação através de Steps compartilhados

---

## Como executar

### Instalar as dependências

```bash
npm install
```

### Executar interface gráfica

```bash
npx cypress open
```

### Executar todos os testes

```bash
npx cypress run
```

---

### Frontend

Executar Login

```bash
npx cypress run --spec cypress/e2e/frontend/features/login.feature
```

Executar Cadastro

```bash
npx cypress run --spec cypress/e2e/frontend/features/register.feature
```

Executar Lista de Compras

```bash
npx cypress run --spec cypress/e2e/frontend/features/shoppingList.feature
```

---

### API

Executar Login API

```bash
npx cypress run --spec cypress/e2e/api/features/loginApi.feature
```

Executar Usuários API

```bash
npx cypress run --spec cypress/e2e/api/features/usersApi.feature
```

Executar Produtos API

```bash
npx cypress run --spec cypress/e2e/api/features/productsApi.feature
```

---

## Processo de investigação

Durante o desenvolvimento foi encontrada uma divergência entre as mensagens esperadas e as mensagens exibidas pela aplicação.

Todo o processo de investigação está documentado em:

```
docs/investigations/login-validation.md
```

A arquitetura adotada durante o desenvolvimento também foi documentada em:

```
docs/investigations/architecture.md
```

---

## Decisões de Arquitetura

Durante o desenvolvimento foram adotadas algumas decisões visando escalabilidade, organização e manutenção do framework.

- Separação entre Actions, Pages, Services e Factories.
- Camada dedicada para automação de APIs utilizando ApiActions e Services.
- Preparação de massa de dados via API através da camada de Services.
- Reutilização de Step Definitions comuns entre diferentes cenários.
- Geração de usuários dinâmicos utilizando Faker.
- Centralização das constantes da aplicação (URLs, mensagens e tipos) para facilitar manutenção e reutilização.
- Encapsulamento das interações da interface através do Page Object Model.
- Separação entre regras de negócio (Actions) e interações da interface (Pages).
- Utilização de BasePage e BaseService para reduzir duplicação de código.
- Validação de regras de negócio em vez de apenas elementos visuais, como no cenário de Lista de Compras, garantindo que o produto selecionado seja o mesmo exibido na lista.

---

## Próximos passos

- Configuração de GitHub Actions (CI/CD)
- Geração automática de relatórios HTML
- Execução paralela dos testes
- Execução por tags utilizando Cucumber
- Integração com Allure Report
- Testes de contrato (Contract Testing)
- Testes de performance para APIs

---

## Autor

Henrique Garcia

Desenvolvido como parte do desafio técnico para a vaga de **Senior QA Tester** da **Mouts/Ambev**.