# Situação 1 — Corrigir: cada correção ligada à sua Issue

**App:** QuadraLivre (`apps/quadralivre/`) · **Material:** `materiais/ISSUES-QuadraLivre.md`

## Para quem não veio na sexta

O QuadraLivre é um sistema de reserva de quadras. Uma equipe de testes encontrou **5 defeitos** e escreveu uma Issue para cada um (estão em `materiais/ISSUES-QuadraLivre.md`). Issue é o registro de um defeito no GitHub (aba **Issues** do repositório). Agora o seu grupo é a **equipe de desenvolvimento**.

## A situação

> O gerente reclamou: na última versão, ninguém sabia qual alteração no código consertou qual defeito, e um “conserto” quebrou outra coisa sem ninguém perceber. A partir de hoje, **cada correção tem de estar ligada à sua Issue** e **provada por um teste**. A sua equipe vai corrigir os 5 defeitos do QuadraLivre desse jeito e mostrar que funciona.

## Pesquisar (10 min)

1. O que são **mensagens de commit padronizadas** (procurem por *Conventional Commits*)? O que significam `fix:`, `feat:` e `docs:`?
2. Como as palavras **`closes #N`** ou **`fixes #N`** num commit funcionam no GitHub?
3. Por que um **teste automatizado** ajuda a provar uma correção? O que ele tem a ver com **regressão**?
4. O que é **rastreabilidade** entre defeito, correção e teste? Por que as empresas exigem isso?

## Solucionar (10 min)

1. No repositório do grupo, abram as **5 Issues** (**Issues → New issue → Relato de defeito**), copiando de `materiais/ISSUES-QuadraLivre.md`. Anotem o número que cada uma recebeu (#1, #2…).
2. Abram `apps/quadralivre/testes/testes.html` no navegador: **9 de 14 testes passam**. Anotem quais falham.
3. Copiem `modelos/CORRECAO.md` para `entregas/CORRECAO-QuadraLivre.md` e preencham, para cada Issue: a função onde está o defeito, a causa e a correção que vão fazer.

**Onde procurar:** as regras estão em `apps/quadralivre/js/regras.js` (uma função por regra, com o nome da regra no comentário). A persistência (F5) está em `apps/quadralivre/js/app.js`.

## Aplicar (20 min)

Para **cada** Issue, uma de cada vez:

1. Corrijam o código (só a linha necessária).
2. Recarreguem `testes/testes.html` e confiram que o teste da Issue passou **e que nenhum outro quebrou**.
3. Façam um commit só dessa correção, com a mensagem: `fix: <o que foi corrigido> closes #N`
   Exemplo: `fix: horário nobre começa às 18h closes #2`
4. Façam o push e confiram que a Issue **fechou sozinha**, com o link do commit.

A Issue da persistência (F5) não tem teste automático: confiram à mão no `index.html` e registrem o print.

**Meta:** 14 de 14 testes passando, a persistência funcionando e as 5 Issues fechadas por commit.

**Sem Git no computador?** Editem o arquivo no próprio GitHub (ícone de lápis → **Commit changes**, com a mesma mensagem). Para testar, baixem o ZIP de novo ou ativem o GitHub Pages (**Settings → Pages → branch main**).

## Mostrar na apresentação

- O antes e o depois do `testes.html` (9 de 14 → 14 de 14).
- Uma Issue fechada pelo commit, com o link.
- Uma correção que vocês fizeram, linha antes e linha depois.

**Entrega:** `entregas/CORRECAO-QuadraLivre.md`, os commits `fix: … closes #N` e `entregas/APRESENTACAO-grupo-N.md`.
