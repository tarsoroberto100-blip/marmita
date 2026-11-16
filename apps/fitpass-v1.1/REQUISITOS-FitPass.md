# FitPass — Documento de requisitos (v1.0)

O FitPass é a matrícula on-line da Academia Movimento. O aluno informa seus dados, escolhe o plano, vê o resumo com os descontos e confirma a matrícula.

## Regras de negócio

**RN01 — Nome.** O nome é obrigatório, com pelo menos 3 caracteres.

**RN02 — CPF.** O CPF tem **11 números**, com ou sem pontos e hífen (`12345678909` ou `123.456.789-09`). O sistema confere só o formato.

**RN03 — Idade.** A matrícula é permitida a partir de **14 anos**. De 14 a 17 anos, só com a **autorização do responsável** marcada.

**RN04 — Planos.** Mensal R$ 99,90 · Trimestral R$ 269,70 · Anual R$ 958,80.

**RN05 — Taxa de matrícula.** R$ 50,00 no plano mensal. **Isenta nos planos trimestral e anual.**

**RN06 — Descontos.** Estudante tem **15%** de desconto. Quem tem **60 anos ou mais** tem **20%**. Os descontos **não se somam**: quem tem direito aos dois recebe só o maior (20%). O desconto vale **só sobre o valor do plano**, nunca sobre a taxa de matrícula.

**RN07 — Total.** Total = valor do plano − desconto + taxa de matrícula.

## Exemplo

Estudante de 20 anos no plano mensal: plano R$ 99,90 − desconto R$ 14,99 + matrícula R$ 50,00 = **R$ 134,91**.

## Requisitos não funcionais

**RNF01 — Valores.** Todo valor aparece em reais, no formato `R$ 0,00` (com vírgula e dois decimais).

**RNF02 — Mensagens.** Toda entrada recusada mostra uma mensagem dizendo o que corrigir.
