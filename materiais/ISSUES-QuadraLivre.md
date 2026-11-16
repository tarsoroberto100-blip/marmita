# Issues do QuadraLivre v1.0 — para abrir no repositório do grupo

Copiem cada uma para **Issues → New issue → Relato de defeito** (título e corpo). Ambiente usado nos testes: Google Chrome, Windows 11, QuadraLivre v1.0.

---

## Issue A — [BUG] Reserva de 4 horas é aceita

**Regra violada:** RN03 (reservas de 1 a 3 horas)
**Passos:** 1. Nome “Ana Souza”, telefone `(85) 99999-1234`, futsal, data qualquer. 2. Início 10:00, duração **4**. 3. Calcular valor.
**Esperado:** recusa: “Horário fora do permitido…”
**Obtido:** aceita e mostra “Valor: R$ 320,00”.
**Severidade:** média

---

## Issue B — [BUG] Horário nobre não é cobrado na hora das 18:00

**Regra violada:** RN05 (hora que começa às 18:00 ou depois custa 25% a mais)
**Passos:** 1. Futsal, início 18:00, duração 1, sem sócio. 2. Calcular valor.
**Esperado:** R$ 100,00.
**Obtido:** R$ 80,00.
**Observação:** o exemplo do documento (futsal das 17:00 às 19:00) dá R$ 160,00 em vez de R$ 180,00.
**Severidade:** alta

---

## Issue C — [BUG] Duas reservas sobrepostas na mesma quadra são aceitas

**Regra violada:** RN07 (conflito de horário)
**Passos:** 1. Reservar futsal, 20/11, das 18:00 às 20:00 (início 18, duração 2). 2. Reservar futsal, 20/11, início 19:00, duração 1.
**Esperado:** a segunda reserva é recusada: “Essa quadra já está reservada nesse horário.”
**Obtido:** as duas são aceitas.
**Severidade:** crítica

---

## Issue D — [BUG] Telefone com 10 números é aceito

**Regra violada:** RN02 (exatamente 11 números)
**Passos:** telefone `(85) 9999-1234`, demais dados válidos, calcular valor.
**Esperado:** recusa: “Telefone inválido…”
**Obtido:** aceita.
**Severidade:** baixa

---

## Issue E — [BUG] Reservas somem depois de recarregar a página

**Regra violada:** RNF01 (persistência)
**Passos:** 1. Fazer uma reserva válida. 2. Ela aparece em “Minhas reservas”. 3. Apertar F5.
**Esperado:** a reserva continua na lista.
**Obtido:** a lista fica vazia (“Nenhuma reserva ainda.”).
**Severidade:** alta
