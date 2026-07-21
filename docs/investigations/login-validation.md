# Investigação - Validação de Login

## Contexto

Durante a implementação dos cenários de Login, os testes relacionados aos campos obrigatórios apresentavam falha.

---

## Sintoma

Os testes esperavam as mensagens:

- Email não pode ficar em branco
- Password não pode ficar em branco

Entretanto, durante a execução automatizada, a aplicação apresentava:

- Email é obrigatório
- Password é obrigatório

---

## Hipóteses investigadas

Durante a investigação foram verificadas as seguintes possibilidades:

- Seletor incorreto
- Erro na UserFactory
- Campos preenchidos incorretamente
- Valores enviados ao formulário
- Conteúdo dos inputs antes do submit
- Requisição HTTP
- Resposta da API
- Conteúdo do DOM
- Diferença entre Chrome e Electron

---

## Técnicas utilizadas

- cy.intercept()
- cy.wait()
- console.log()
- invoke("val")
- invoke("text")
- DevTools
- Inspeção de Request Payload
- Inspeção do DOM
- Comparação entre execução manual e automatizada

---

## Evidências coletadas

Foi confirmado que:

- Os campos eram preenchidos corretamente.
- O payload enviado era o esperado.
- A requisição era enviada normalmente.
- O DOM continha exatamente a mensagem exibida ao usuário.
- O frontend apresentava mensagens diferentes da expectativa inicial.

---

## Conclusão

Após validar todas as camadas (Page, Actions, Factory, DOM e API), foi identificado que a expectativa utilizada pelos testes não refletia o comportamento atual da aplicação.

As mensagens esperadas foram atualizadas para refletir o comportamento real do sistema.

Não foi necessária nenhuma alteração na arquitetura do framework.

---

## Aprendizados

Esse processo reforçou a importância de:

- levantar hipóteses antes de alterar código;
- validar evidências em cada camada da aplicação;
- utilizar interceptação de rede para apoiar investigações;
- separar problemas da automação de problemas da aplicação.