# Apresentação — Situação 3 · Grupo 3

**Integrantes e quem fala cada parte:** (preencher)

## 1. A situação (30 s)

O dono do restaurante não vai ler 16 casos de teste. Ele quer uma página que diga o que foi testado, o que deu errado, o que já foi corrigido e se o MarmitaJá pode ir ao ar. O gerente sugeriu usar IA para revisar o relatório, mas avisou: "A IA revisa. Quem assina são vocês."

## 2. O que a pesquisa mostrou (1 min)

Respostas às 4 perguntas, em poucas linhas:

(apresentado no slide)

1. O que é um relatório final de testes e suas partes (ISO/IEC/IEEE 29119-3):
2. Métricas comuns:
3. O que é critério de saída:
4. Riscos de usar IA (alucinação):


Fontes

Edinburgh (exemplos da ISO 29119-3): https://opencourse.inf.ed.ac.uk/sites/default/files/https/opencourse.inf.ed.ac.uk/st/2024/iso-29119-3-examples.pdf
Microtool, sobre a norma 29119-3:2021: https://www.microtool.de/en/document-management/test-documentation-with-iso-iec-ieee-29119-32021
IEEE, página da norma: https://standards.ieee.org/ieee/29119-3/7498/

## 3. A solução do grupo (1 min)

Escrevemos o relatório final **sem IA**, só com os dados da execução.

- **Números:** 16 planejados, **15 executados**, 1 bloqueado (CT16). Passando ao final: 13. Falhando: 2. **Aprovação: 13 ÷ 15 = 86,67%.**
- **Defeitos:** 5 encontrados (2 altos, 2 médios, 1 baixo), 3 corrigidos e retestados, **2 abertos**: DEF-02 (alta) e DEF-04 (baixa).
- **Critério de saída:** nenhum defeito crítico/alto aberto → **não** (DEF-02). 90% ou mais passando → **não** (86,67%).
- **Recomendação:** **não vai ao ar na v1.1.** Corrigir o DEF-02 e retestar (com a correção seriam 14 ÷ 15 = 93,33%), corrigir o DEF-04 e executar o CT16 em um celular.

## 4. A aplicação no app (1 min 30 s)

O que fizemos, o que encontramos e a evidência que vamos mostrar na tela:

1. **Revisão com IA** (receita das 5 partes: Papel, Contexto, Tarefa, Formato, Critério): 9 sugestões, conferimos cada uma nos dados. **4 aceitas, 5 rejeitadas.**
   - **Aceita:** tabela de defeitos por severidade (sugestão 5). Os dados permitem e deixa a leitura clara.
   - **Rejeitada:** "16 casos executados, 93,75%" (sugestão 2). Prova: o CT16 está bloqueado, então foram 15 executados e 13 passando = 86,67%.
   - **Rejeitada (inventada):** "teste de carga com 500 pedidos" (sugestão 6). Prova: nenhum caso de CT01 a CT16 é teste de carga.
   - **Rejeitada (perigosa):** "reclassificar DEF-02 como baixa" e "pode ir ao ar" (sugestões 4 e 8). Prova: DEF-02 é alta e o critério de saída falha nas duas condições.
2. **Conferência no app** (`apps/marmitaja-v1.1/index.html`), Chrome:
   - **DEF-02:** 3 marmitas M + cupom `MARMITA10` → desconto R$ 7,30 e total **R$ 65,70** (esperado R$ 6,60 e **R$ 66,40**). Print: `entregas/evidencias/DEF-02-v1.1.png`
   - **DEF-04:** quantidade 11 de marmita M → aceita, entra no carrinho (R$ 242,00); esperado: recusa (1 a 10). Print: `entregas/evidencias/DEF-04-v1.1.png`

## 5. A lição (1 min)

Uma equipe de testes deve:

- Calcular as métricas com cuidado (caso bloqueado não é executado) e comparar o resultado com o **critério de saída combinado antes**.
- Tirar o resultado esperado do documento de requisitos e guardar evidência (print) dos defeitos abertos.
- Conferir toda sugestão da IA nos dados antes de aceitar.
- Reservar os recursos de teste (como um celular) antes da rodada.

E deve evitar:

- Aceitar a IA sem conferir: ela inventou um teste de carga, errou a contagem e recomendou liberar um site que não atende o critério.
- Reclassificar a severidade de um defeito para o critério de saída "passar".
- Recomendar a liberação com defeito alto aberto.

**Resposta ao gerente:** o MarmitaJá **não** vai ao ar na v1.1. Vai quando o DEF-02 for corrigido e retestado.