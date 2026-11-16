# Issues confirmadas do FitPass v1.0 — para abrir no repositório do grupo

Estas 5 Issues foram confirmadas na triagem da v1.0. Copiem cada uma para **Issues → New issue → Relato de defeito**. Ambiente: Google Chrome, Windows 11, FitPass v1.0.

---

## Issue A — [BUG] Aluno de 14 anos com autorização é recusado

**Regra violada:** RN03 (a partir de 14 anos; de 14 a 17, com autorização)
**Passos:** idade 14, autorização do responsável marcada, plano mensal, simular valor.
**Esperado:** aceito, total R$ 149,90.
**Obtido:** “Menores de 18 anos precisam da autorização do responsável.” (com a autorização marcada)
**Severidade:** alta

---

## Issue B — [BUG] Plano trimestral cobra taxa de matrícula

**Regra violada:** RN05 (isenta no trimestral e no anual)
**Passos:** idade 20, plano trimestral, sem estudante, simular.
**Esperado:** matrícula isenta, total R$ 269,70.
**Obtido:** matrícula R$ 50, total R$ 319.7.
**Severidade:** alta

---

## Issue C — [BUG] Desconto calculado também sobre a taxa de matrícula

**Regra violada:** RN06 (o desconto vale só sobre o valor do plano)
**Passos:** idade 20, estudante, plano mensal, simular (é o exemplo do documento).
**Esperado:** desconto R$ 14,99, total R$ 134,91.
**Obtido:** desconto R$ 22.49, total R$ 127.41.
**Severidade:** alta

---

## Issue D — [BUG] Estudante com 60 anos ou mais recebe os dois descontos somados

**Regra violada:** RN06 (os descontos não se somam; vale o maior)
**Passos:** idade 65, estudante, plano anual, simular.
**Esperado:** 20%, total R$ 767,04.
**Obtido:** 35%, total R$ 623.22.
**Severidade:** média

---

## Issue E — [BUG] Valores com ponto e sem os dois decimais

**Regra violada:** RNF01 (formato `R$ 0,00`)
**Passos:** idade 30, plano mensal, simular.
**Esperado:** `R$ 149,90`.
**Obtido:** `R$ 149.9`.
**Severidade:** baixa
