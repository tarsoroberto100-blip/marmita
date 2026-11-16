# Situação 3 — Relatar o fim: o relatório final de testes, revisado com IA

**App:** MarmitaJá v1.1 (`apps/marmitaja-v1.1/`) · **Material:** `materiais/EXECUCAO-MarmitaJa.md`

## Para quem não veio na sexta

O MarmitaJá é um site de pedidos de marmitas. Uma equipe de testes executou **16 casos de teste**, achou **5 defeitos**, e a equipe de desenvolvimento entregou a versão 1.1 com algumas correções. Todos os números estão em `materiais/EXECUCAO-MarmitaJa.md`. Agora o seu grupo escreve o **relatório final de testes**.

## A situação

> O dono do restaurante não vai ler 16 casos de teste. Ele quer **uma página** dizendo o que foi testado, o que deu errado, o que já foi corrigido e se o site pode ir ao ar. O gerente sugeriu usar uma **IA para revisar** o relatório antes de enviar, mas avisou: **“A IA revisa. Quem assina são vocês.”**

## Pesquisar (10 min)

1. O que é um **relatório final de testes** (ou relatório de encerramento, *test completion report*)? Quais partes ele tem? (Procurem pela norma ISO/IEC/IEEE 29119-3.)
2. Quais **métricas** costumam aparecer: casos executados, taxa de aprovação, defeitos por severidade, defeitos abertos?
3. O que é um **critério de saída** (ou de encerramento) dos testes?
4. Quais os **riscos** de usar IA para escrever ou revisar um relatório? (Lembrem da alucinação.)

## Solucionar (10 min)

Copiem `modelos/RELATORIO-FINAL.md` para `entregas/RELATORIO-FINAL-MarmitaJa.md` e escrevam o relatório **sem IA**, só com os dados de `materiais/EXECUCAO-MarmitaJa.md`:

- calculem as métricas (façam as contas: quantos executados, quantos passaram, taxa de aprovação, defeitos abertos por severidade);
- confiram o **critério de saída** que está no material;
- escrevam a **recomendação**: vai ao ar ou não, e com que condição.

## Aplicar (20 min)

1. **Revisão com IA.** Mandem o relatório para uma IA (ChatGPT, Gemini, Copilot ou outra) com este prompt, que segue a receita das 5 partes:

   ```
   Papel: Você é um analista de qualidade sênior.
   Contexto: Abaixo estão os dados de execução dos testes do MarmitaJá
   e o relatório final que minha equipe escreveu.
   Tarefa: Revise o relatório. Aponte números errados, informações que
   faltam e partes pouco claras para um dono de restaurante.
   Formato: Uma lista numerada de sugestões, cada uma com o trecho e a melhoria.
   Critério: Use só os dados fornecidos. Não invente testes nem números.
   [colar os dados de execução e o relatório]
   ```

   **A IA não abriu no laboratório?** Usem `materiais/plano-b/RESPOSTA-IA-relatorio.md`.

2. Para **cada** sugestão da IA, decidam: **aceitar** ou **rejeitar**, conferindo nos dados. Registrem na tabela “Revisão com IA” do relatório.
3. Confiram **no app** (`apps/marmitaja-v1.1/index.html`) os 2 defeitos que o material diz que continuam abertos, e coloquem o print como evidência.
4. Façam a versão final do relatório.

## Mostrar na apresentação

- O relatório final na tela: as métricas e a recomendação.
- Uma sugestão da IA que vocês aceitaram e uma que rejeitaram, com a prova nos dados.
- A resposta ao gerente: o MarmitaJá vai ao ar?

**Entrega:** `entregas/RELATORIO-FINAL-MarmitaJa.md` e `entregas/APRESENTACAO-grupo-N.md`.
