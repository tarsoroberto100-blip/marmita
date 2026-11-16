# Guia rápido — fechando o ciclo do defeito

Ponto de partida para a pesquisa. Não substitui as fontes: aprofundem e citem de onde tiraram.

## O ciclo de vida do defeito

Novo → Confirmado (ou Rejeitado / Duplicado) → Em correção → Corrigido → **Retestado** → Fechado. Se o reteste falhar, a Issue é **reaberta** (ou continua aberta) e volta para a correção.

## Issue

O registro de um defeito no bugtracker (no GitHub, a aba **Issues**). Tem título, regra violada, passos, dados exatos, esperado (do requisito), obtido, evidência e severidade. **Um defeito por Issue.**

## Correção rastreável

- **Um commit por correção**, mexendo só no necessário.
- Mensagem padronizada (*Conventional Commits*): `fix:` corrige defeito, `feat:` nova funcionalidade, `docs:` documentação, `test:` testes.
- No GitHub, `closes #4` ou `fixes #4` na mensagem do commit **fecha a Issue 4** quando o commit chega à branch principal, e deixa o link entre a Issue e o código.
- **Rastreabilidade:** dá para seguir o caminho requisito → Issue → commit → teste, nos dois sentidos.

## Teste automatizado

Um programa que confere as regras sozinho (como o `testes.html` do QuadraLivre). Prova a correção e, rodado depois de cada mudança, mostra se algo que funcionava **quebrou**: é a regressão automática.

## Reteste × regressão

- **Reteste (teste de confirmação):** repetir o caso que falhou, na nova versão, para confirmar a correção. Bom costume: testar também **variações** (outros valores da mesma regra), porque uma correção pode valer só para o exemplo.
- **Regressão:** testar de novo o que **já funcionava**, para garantir que a mudança não quebrou outra coisa. Sem tempo para tudo, priorize o que fica **perto do código alterado** e o que tem **mais risco**.
- **Fechar a Issue** só quando o reteste passa. Se falhar, ela continua aberta (ou é reaberta) com o caso que falhou.

## Relatório final de testes

Também chamado de relatório de encerramento (*test completion report*, ISO/IEC/IEEE 29119-3). Partes comuns: resumo, escopo, ambiente, números (casos executados, passando, falhando, bloqueados), defeitos por severidade (encontrados, corrigidos, abertos), critério de saída, recomendação e lições aprendidas.

- **Taxa de aprovação** = casos passando ÷ casos **executados** (um caso bloqueado não foi executado).
- **Critério de saída:** a regra combinada antes, no plano, que diz quando os testes podem terminar e o sistema pode ir ao ar.

## IA para revisar

Use a receita das 5 partes: **Papel, Contexto, Tarefa, Formato, Critério**. A IA pode inventar números e testes (**alucinação**): toda sugestão é conferida nos dados antes de entrar no relatório. Quem assina é a equipe.
