# MarmitaJá — dados de execução dos testes

**Equipe de testes:** Equipe Q · **Ambiente:** Google Chrome, Windows 11

## Critério de saída (definido no plano de teste)

O MarmitaJá só vai ao ar quando:

1. **nenhum defeito de severidade crítica ou alta** estiver aberto; e
2. pelo menos **90% dos casos executados** estiverem passando.

## Rodada 1 — versão 1.0 (12/11)

| Caso | Regra | O que testa | Esperado | Obtido | Status | Defeito |
| --- | --- | --- | --- | --- | --- | --- |
| CT01 | RN01 | Quantidade 1 | aceita | aceita | Passou | |
| CT02 | RN01 | Quantidade 10 | aceita | aceita | Passou | |
| CT03 | RN01 | Quantidade 11 | recusa | aceita | Falhou | DEF-04 |
| CT04 | RN01 | Quantidade 0 | recusa | recusa | Passou | |
| CT05 | RN02 | 2 M + 1 G | subtotal R$ 70,00 | R$ 70,00 | Passou | |
| CT06 | RN03 | 3 G (subtotal R$ 78,00) | frete R$ 7,00 | R$ 7,00 | Passou | |
| CT07 | RN03 | 3 P + 1 G (subtotal R$ 80,00) | frete grátis | frete R$ 7,00 | Falhou | DEF-01 |
| CT08 | RN04 | 3 M + `MARMITA10` (exemplo do documento) | total R$ 66,40 | R$ 65,70 | Falhou | DEF-02 |
| CT09 | RN04 | cupom `marmita10` | aceito | recusado | Falhou | DEF-03 |
| CT10 | RN04 | cupom `XPTO` | recusado | recusado | Passou | |
| CT11 | RN05 | 1 P (subtotal R$ 18,00) | recusa pelo mínimo | recusa | Passou | |
| CT12 | RN05 | 2 P (subtotal R$ 36,00) | aceita | aceita | Passou | |
| CT13 | RN06 | CEP `60000-000` | aceito | aceito | Passou | |
| CT14 | RN06 | CEP `6000-000` (7 números) | recusado | recusado | Passou | |
| CT15 | RN07 | 3 itens, Remover no 3º | sai o 3º | sai o 1º | Falhou | DEF-05 |
| CT16 | RNF01 | Pedido completo no celular | formato R$ 0,00 no celular | — | Bloqueado | |

CT16 ficou **bloqueado**: não havia celular Android disponível no laboratório.

## Defeitos encontrados

| Defeito | Caso | Resumo | Severidade |
| --- | --- | --- | --- |
| DEF-01 | CT07 | Frete cobrado com subtotal de exatamente R$ 80,00 | média |
| DEF-02 | CT08 | Desconto do cupom calculado também sobre o frete (cobra a menos em todo pedido com cupom) | alta |
| DEF-03 | CT09 | Cupom em minúsculas é recusado | média |
| DEF-04 | CT03 | Quantidade 11 é aceita | baixa |
| DEF-05 | CT15 | Remover apaga sempre o primeiro item do carrinho | alta |

## Rodada 2 — versão 1.1 (14/11)

A equipe de desenvolvimento entregou a v1.1 dizendo ter corrigido DEF-01, DEF-03 e DEF-05.

**Reteste:**

| Defeito | Caso | Resultado na v1.1 |
| --- | --- | --- |
| DEF-01 | CT07 | Passou (frete grátis) → **fechado** |
| DEF-03 | CT09 | Passou (cupom aceito) → **fechado** |
| DEF-05 | CT15 | Passou (sai o 3º item) → **fechado** |
| DEF-02 | CT08 | Falhou de novo (R$ 65,70) → **aberto** (não estava na lista de correções) |
| DEF-04 | CT03 | Falhou de novo (aceita 11) → **aberto** (não estava na lista de correções) |

**Regressão:** os 10 casos que tinham passado na rodada 1 (CT01, CT02, CT04, CT05, CT06, CT10, CT11, CT12, CT13, CT14) foram executados de novo na v1.1. **Todos passaram.**

CT16 continua bloqueado.
