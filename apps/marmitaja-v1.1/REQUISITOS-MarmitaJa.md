# MarmitaJá — Documento de requisitos (v1.0)

O MarmitaJá é o site de pedidos de marmitas de um restaurante do bairro. O cliente escolhe o tamanho e a quantidade, monta o carrinho, informa o CEP e o cupom (se tiver) e finaliza o pedido.

## Regras de negócio

**RN01 — Quantidade.** Cada item do carrinho tem de **1 a 10 marmitas**. Quantidade fora disso é recusada com mensagem.

**RN02 — Preços.** Marmita P R$ 18,00 · M R$ 22,00 · G R$ 26,00. O subtotal é a soma de preço × quantidade de todos os itens.

**RN03 — Frete.** O frete custa **R$ 7,00**. É **grátis para subtotal a partir de R$ 80,00**. O frete é calculado sobre o subtotal, antes do cupom.

**RN04 — Cupom.** O cupom `MARMITA10` dá **10% de desconto sobre o subtotal das marmitas** (o frete não tem desconto). Maiúsculas e minúsculas são aceitas, e espaços no começo e no fim são ignorados. Qualquer outro cupom é recusado com mensagem.

**RN05 — Pedido mínimo.** O pedido só é finalizado com subtotal de pelo menos **R$ 30,00**.

**RN06 — CEP.** O CEP tem **8 números**, com ou sem hífen (`60000000` ou `60000-000`).

**RN07 — Carrinho.** O botão **Remover** tira do carrinho exatamente o item da linha clicada, e o resumo é recalculado na hora.

## Exemplo

3 marmitas M (R$ 66,00) com o cupom `MARMITA10`: subtotal R$ 66,00 · frete R$ 7,00 · desconto R$ 6,60 · **total R$ 66,40**.

## Requisitos não funcionais

**RNF01 — Valores.** Todo valor aparece em reais, no formato `R$ 0,00`.

**RNF02 — Mensagens.** Toda entrada recusada mostra uma mensagem dizendo o que corrigir.
