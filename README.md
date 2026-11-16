# Fechando o ciclo do defeito — seminário

Um defeito só termina quando é **corrigido**, **retestado** e **registrado no relatório final**. Hoje cada grupo recebe uma **situação real** desse fim de ciclo, pesquisa como as empresas fazem, monta a solução, **aplica num app de verdade** e apresenta para a turma.

**Faltou na aula passada?** Sem problema. Cada situação traz todo o material de que o grupo precisa, e o `materiais/GUIA-RAPIDO.md` explica os conceitos em uma página.

## O ciclo de vida do defeito

```
Novo → Confirmado → Em correção → Corrigido → Retestado → Fechado
                         ↑                        |
                         └──── reaberto ←─────────┘ (se o reteste falhar)
```

Hoje: o grupo 1 **corrige**, o grupo 2 **retesta** e o grupo 3 escreve o **relatório final**.

## O que tem neste repositório

```
fechando-o-ciclo/
├── README.md                       ← este arquivo
├── situacoes/                      ← uma situação por grupo
│   ├── SITUACAO-1-corrigir.md       (QuadraLivre)
│   ├── SITUACAO-2-retestar.md       (FitPass v1.0 → v1.1)
│   └── SITUACAO-3-relatorio.md      (MarmitaJá)
├── apps/                           ← abra o index.html de cada um no navegador
│   ├── quadralivre/                 (com testes/testes.html)
│   ├── fitpass-v1.0/   fitpass-v1.1/
│   └── marmitaja-v1.1/
├── materiais/                      ← os dados de cada situação
│   ├── GUIA-RAPIDO.md
│   ├── ISSUES-QuadraLivre.md            (situação 1)
│   ├── ISSUES-CONFIRMADAS-FitPass.md    (situação 2)
│   ├── NOTAS-DA-VERSAO-FitPass-v1.1.md  (situação 2)
│   ├── EXECUCAO-MarmitaJa.md            (situação 3)
│   └── plano-b/RESPOSTA-IA-relatorio.md (situação 3, se a IA não abrir)
├── modelos/                        ← o que cada grupo preenche
├── .github/ISSUE_TEMPLATE/         ← modelo de Issue (relato de defeito)
└── entregas/                       ← o trabalho do grupo vai aqui
```

## Passo a passo (55 minutos)

| Tempo | O que fazer |
| --- | --- |
| 0–5 min | Um integrante cria o repositório do grupo: **Use this template** → `fechando-o-ciclo-grupo-N`, público, e adiciona os colegas em **Settings → Collaborators**. Todos leem a situação em `situacoes/`. |
| 5–15 min | **Pesquisar:** respondam às 4 perguntas da situação, com fonte (site e link). Comecem pelo `materiais/GUIA-RAPIDO.md`. |
| 15–25 min | **Solucionar:** montem o que a situação pede, no modelo de `modelos/`. |
| 25–45 min | **Aplicar:** usem a solução no app da situação, com valores exatos e evidência (print). |
| 45–55 min | **Preparar a apresentação** com `modelos/APRESENTACAO.md`. Commit e push. |

**Como abrir um app:** clone o repositório (ou **Code → Download ZIP**) e dê dois cliques em `apps/<app>/index.html`.

## Roteiro da apresentação (5 minutos + 3 de perguntas)

1. **A situação** (30 s): qual era o problema.
2. **O que a pesquisa mostrou** (1 min): como as empresas fazem, com uma fonte.
3. **A solução do grupo** (1 min): o plano, o registro ou o relatório que vocês montaram.
4. **A aplicação** (1 min 30 s): o que aconteceu no app. Mostrem na tela uma evidência.
5. **A lição** (1 min): o que uma equipe de testes deve fazer, e o que deve evitar.

## Regras

- O resultado esperado vem **sempre do documento de requisitos** do app (`REQUISITOS-*.md`), nunca do que a tela mostra.
- Valores **exatos** em todo teste, Issue e relatório.
- **Nunca** colem numa IA dados pessoais reais, senhas ou código de empresa. Aqui tudo é fictício.

## Entrega

O que a situação pede, em `entregas/`, mais `entregas/APRESENTACAO-grupo-N.md`. Commit e push: `git commit -m "docs: situação N fechando o ciclo"`.
