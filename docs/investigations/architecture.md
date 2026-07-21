# Arquitetura

O framework foi desenvolvido utilizando separação de responsabilidades.

```
Feature
        ↓
Step
        ↓
Actions
        ↓
Pages
        ↓
BasePage
```

## Responsabilidades

### Feature

Representa o comportamento esperado.

### Step

Realiza apenas o mapeamento entre Gherkin e código.

### Actions

Responsável pela orquestração dos fluxos de negócio.

### Pages

Responsável pelas interações com a interface.

### BasePage

Centraliza comportamentos comuns.

### Factory

Responsável pela criação das massas de teste.

### Utils

Constantes e tipos reutilizáveis.