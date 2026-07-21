# Cypress Automation Framework

Framework de automação de testes desenvolvido para o desafio técnico da Mouts utilizando Cypress, JavaScript e Cucumber (BDD).

---

## Tecnologias

- Cypress
- JavaScript (ES6+)
- Cucumber / Gherkin
- Page Object Model (POM)
- Factory Pattern
- Actions Pattern
- Cypress Intercept
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
│   ├── frontend
│   └── api
├── factories
├── fixtures
├── pages
├── services
├── support
└── utils
```

---

## Padrões utilizados

- Page Object Model
- Factory Pattern
- Base Page
- Actions Layer
- Constantes centralizadas
- Massa de testes desacoplada
- Reutilização de componentes

---

## Funcionalidades implementadas

### Frontend

- Login com sucesso
- Login inválido
- Campos obrigatórios
- Validação de mensagens
- Validação de navegação

### API

- (em desenvolvimento)

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

Executar headless

```bash
npx cypress run
```

Executar apenas Login

```bash
npx cypress run --spec cypress/e2e/frontend/features/login.feature
```

---

## Processo de investigação

Durante o desenvolvimento foi encontrada uma divergência entre as mensagens esperadas e as mensagens exibidas pela aplicação.

Todo o processo de investigação está documentado em:

```
docs/investigations/login-validation.md
```

---

## Próximos passos

- Cadastro
- Produtos
- Carrinho
- Checkout
- API
- Relatórios
- CI/CD