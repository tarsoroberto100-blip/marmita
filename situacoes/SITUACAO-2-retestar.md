# Situação 2 — Retestar: a versão 1.1 “com tudo corrigido”

**App:** FitPass v1.0 (`apps/fitpass-v1.0/`) e v1.1 (`apps/fitpass-v1.1/`)
**Material:** `materiais/ISSUES-CONFIRMADAS-FitPass.md` e `materiais/NOTAS-DA-VERSAO-FitPass-v1.1.md`

## Para quem não veio na sexta

O FitPass é a matrícula on-line de uma academia. Na versão 1.0, a equipe de testes confirmou **5 defeitos** (estão em `materiais/ISSUES-CONFIRMADAS-FitPass.md`). A equipe de desenvolvimento entregou a **versão 1.1** e escreveu nas notas da versão que corrigiu tudo. Agora o seu grupo é a **equipe de testes** que decide se isso é verdade.

## A situação

> A academia quer abrir as matrículas amanhã. O desenvolvedor garante: “corrigi os 5, pode liberar”. O gerente respondeu: **“Só libero com o reteste e a regressão feitos pela equipe de testes.”**

## Pesquisar (10 min)

1. O que é **reteste** (ou teste de confirmação)? E **teste de regressão**? Qual a diferença?
2. Como escolher **quais casos** entram na regressão quando não dá para testar tudo de novo?
3. Quando uma Issue pode ser **fechada** depois do reteste? Quando ela deve ser **reaberta**?
4. Por que retestar só com o exemplo exato da Issue pode não ser suficiente?

## Solucionar (10 min)

1. No repositório do grupo, abram as **5 Issues** confirmadas (**Issues → New issue → Relato de defeito**), copiando de `materiais/ISSUES-CONFIRMADAS-FitPass.md`.
2. Copiem `modelos/RETESTE.md` para `entregas/RETESTE-FitPass.md` e montem:
   - o **plano de reteste**: para cada Issue, o caso da própria Issue **e pelo menos uma variação** (outro plano, outra idade, outra combinação de descontos);
   - o **plano de regressão**: **8 casos ou mais** de coisas que funcionavam na v1.0 e que ficam perto do que foi mexido (idade, autorização, CPF, planos, descontos).

**Dica:** leiam as notas da versão. Tudo o que o desenvolvedor diz que mexeu é candidato a reteste **e** a regressão.

## Aplicar (20 min)

1. Executem o plano na **v1.1** (`apps/fitpass-v1.1/index.html`). Se ficar em dúvida se algo mudou, comparem com a v1.0.
2. Para cada Issue, comentem nela o resultado do reteste (dados usados, esperado, obtido, print) e:
   - **passou em todos os casos** → fechem a Issue (**Close as completed**);
   - **falhou em algum** → deixem aberta, com o comentário “Reteste falhou na v1.1” e o caso que falhou.
3. Se a regressão achar algo que **funcionava na v1.0 e quebrou na v1.1**, abram uma **Issue nova** com a label `regressão` (criem a label em **Issues → Labels → New label**).
4. No fim do plano, escrevam a decisão: **a v1.1 pode ser liberada amanhã?**

## Mostrar na apresentação

- O placar do reteste: quantas Issues fechadas e quantas continuam abertas.
- O caso de variação que pegou algo que o exemplo da Issue não pegava (se houve).
- A regressão: o que quebrou na v1.1, com o print.
- A decisão: libera ou não.

**Entrega:** `entregas/RETESTE-FitPass.md`, os comentários nas Issues, a Issue de regressão (se houver) e `entregas/APRESENTACAO-grupo-N.md`.
