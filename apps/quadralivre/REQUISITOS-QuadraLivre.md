# QuadraLivre — Documento de requisitos (v1.0)

O QuadraLivre é o sistema de reservas de quadras do Centro Esportivo Bairro Novo. O responsável escolhe a quadra, a data e o horário, vê o valor e confirma a reserva.

## Regras de negócio

**RN01 — Nome.** O nome do responsável é obrigatório e tem de **3 a 40 caracteres**. Espaços no começo e no fim são ignorados.

**RN02 — Telefone.** Celular com DDD: exatamente **11 números** (exemplo: `(85) 99999-1234`). Parênteses, espaços e hífen são aceitos e ignorados.

**RN03 — Horário.** O centro funciona das **08:00 às 22:00**. Cada reserva dura de **1 a 3 horas inteiras** e precisa terminar até as 22:00. Exemplo: começar às 20:00 com 2 horas é permitido; às 21:00 com 2 horas, não.

**RN04 — Preço por hora.** Futsal R$ 80,00 · Vôlei R$ 60,00 · Tênis R$ 70,00.

**RN05 — Horário nobre.** Cada hora que **começa às 18:00 ou depois** custa **25% a mais**. Exemplo: futsal das 17:00 às 19:00 = R$ 80,00 + R$ 100,00 = R$ 180,00.

**RN06 — Sócio.** Sócios têm **10% de desconto** sobre o valor total da reserva.

**RN07 — Conflito.** Uma quadra não pode ter duas reservas que se **sobrepõem** na mesma data, nem que seja por uma hora. Exemplo: com futsal reservado das 18:00 às 20:00, uma nova reserva de futsal das 19:00 às 20:00 no mesmo dia é recusada.

## Requisitos não funcionais

**RNF01 — Persistência.** As reservas continuam na lista depois de recarregar a página (F5) ou fechar e abrir o navegador.

**RNF02 — Valores.** Todo valor aparece em reais, no formato `R$ 0,00`.

**RNF03 — Mensagens.** Toda entrada recusada mostra uma mensagem dizendo o que corrigir.
