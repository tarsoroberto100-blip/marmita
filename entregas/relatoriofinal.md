# Relatório final de testes — MarmitaJá

**Grupo:** 3 **Versão avaliada:** v1.1 · **Data:** 16/11 · **Equipe de testes:** Tarso, jefferson, pedro eduardo, kayk, tiago · **Ambiente:** Google Chrome, Windows 11

## 1. Resumo para o dono do restaurante

Foram planejados 16 casos de teste; 15 foram executados e 1 ficou bloqueado. Foram encontrados 5 defeitos, dos quais 3 já foram corrigidos e confirmados, e 2 continuam abertos na versão 1.1 (um de severidade alta, que cobra o cliente a menos em todo pedido com cupom).

**Recomendação: o MarmitaJá NÃO pode ir ao ar ainda.** Os dois itens do critério de saída não foram atendidos. Após corrigir o DEF-02 e retestar, o site passa a atender o critério.

## 2. O que foi testado

- **Escopo:** as regras de negócio RN01 a RN07 (quantidade, preços, frete, cupom, pedido mínimo, CEP, carrinho) e o requisito de formato de valores no celular (RNF01), conforme o documento de requisitos.
- **Ambiente:** Google Chrome, Windows 11.
- **Rodada 1 (12/11):** versão 1.0, 16 casos planejados.
- **Rodada 2 (14/11):** versão 1.1. Reteste dos 5 defeitos e regressão dos 10 casos que tinham passado na rodada 1.
- **Fora do que foi testado:** o CT16 (pedido completo no celular) ficou bloqueado por falta de um celular Android no laboratório. Nenhum outro tipo de teste (como carga ou desempenho) foi executado.

## 3. Números

| Métrica | Valor |
| --- | --- |
| Casos planejados | 16 |
| Casos executados | 15 (16 − 1 bloqueado) |
| Casos bloqueados | 1 (CT16) |
| Passando ao final (rodada 2) | 13 (10 de regressão + 3 retestes: CT07, CT09, CT15) |
| Falhando ao final | 2 (CT03 e CT08) |
| Taxa de aprovação final (passando ÷ executados) | 13 ÷ 15 = **86,67%** |

## 4. Defeitos

| Severidade | Encontrados | Corrigidos e retestados | Ainda abertos |
| --- | --- | --- | --- |
| Crítica | 0 | 0 | 0 |
| Alta | 2 (DEF-02, DEF-05) | 1 (DEF-05) | **1 (DEF-02)** |
| Média | 2 (DEF-01, DEF-03) | 2 (DEF-01, DEF-03) | 0 |
| Baixa | 1 (DEF-04) | 0 | **1 (DEF-04)** |
| **Total** | **5** | **3** | **2** |

**Defeitos ainda abertos (com evidência na v1.1):**

- **DEF-02 (alta, caso CT08, RN04):** o desconto do cupom `MARMITA10` é calculado também sobre o frete. Com 3 marmitas M (subtotal R$ 66,00) e o cupom, a v1.1 mostra desconto de R$ 7,30 e total de **R$ 65,70**; o esperado pelo documento de requisitos é desconto de R$ 6,60 e total de **R$ 66,40**. Acontece em todo pedido com cupom e o restaurante recebe a menos.
  Evidência: `evidencias/DEF-02-v1.1.png`

  ![DEF-02 na v1.1](evidencias/DEF-02-v1.1.png)

- **DEF-04 (baixa, caso CT03, RN01):** a quantidade 11 é aceita. O requisito permite de 1 a 10 marmitas por item. No app, 11 marmitas M entram no carrinho (R$ 242,00) com a mensagem "Marmita M adicionada.".
  Evidência: `evidencias/DEF-04-v1.1.png`

  ![DEF-04 na v1.1](evidencias/DEF-04-v1.1.png)

## 5. Critério de saída

| Condição | Atendida? | Por quê |
| --- | --- | --- |
| Nenhum defeito crítico ou alto aberto | **Não** | O DEF-02 (severidade alta) continua aberto. |
| 90% ou mais dos casos executados passando | **Não** | 13 de 15 passando = 86,67%, abaixo de 90%. |

Critério de saída atendido? **Não** (as duas condições falharam).

## 6. Recomendação

**O MarmitaJá não pode ir ao ar na versão 1.1.**

Condições para liberar:

1. **Corrigir o DEF-02** (desconto do cupom só sobre o subtotal das marmitas, sem o frete) e retestar o CT08, inclusive com outros valores de pedido.
2. **Refazer a regressão** dos demais casos após a correção.
3. Se o CT08 passar, o resultado seria 14 ÷ 15 = 93,33% de aprovação e nenhum defeito crítico ou alto aberto, e o critério de saída fica atendido.
4. **Corrigir o DEF-04** na mesma entrega é recomendado. Ele é de severidade baixa e, pelo critério atual, não impede a liberação sozinho.
5. **Executar o CT16** em um celular. Ele está bloqueado e não entra na taxa de aprovação, então o requisito de formato `R$ 0,00` no celular segue sem verificação. Os dados não informam data para essa execução.

## 7. Revisão com IA

A IA revisou o relatório; a equipe conferiu cada sugestão nos dados de `materiais/EXECUCAO-MarmitaJa.md`.

| # | Sugestão da IA | Aceitamos? | Prova nos dados |
| --- | --- | --- | --- |
| 1 | Começar com um sumário de 3 linhas para o dono do restaurante. | **Aceita** | O dono quer uma página objetiva (enunciado da situação). Está na seção 1. |
| 2 | Dizer que foram 16 casos executados, com 93,75% (15 de 16) de aprovação. | **Rejeitada** | O CT16 está bloqueado, então foram **15 executados**. Passando são 13, e 13 ÷ 15 = **86,67%**. Caso bloqueado não é executado. |
| 3 | Dizer que há 3 defeitos abertos e listar os três. | **Rejeitada** | Dos 5 defeitos, DEF-01, DEF-03 e DEF-05 foram fechados no reteste. Estão abertos **2**: DEF-02 e DEF-04. |
| 4 | Reclassificar o DEF-02 como baixa, por ser "só centavos". | **Rejeitada** | O material o classifica como **alta**. O erro ocorre em **todo pedido com cupom**, e no app o desconto sai R$ 7,30 em vez de R$ 6,60. Reclassificar para baixa tiraria um defeito alto do critério de saída. |
| 5 | Incluir tabela de defeitos por severidade (abertos e fechados). | **Aceita** | Os dados permitem: 2 altos, 2 médios, 1 baixo, nenhum crítico. Está na seção 4. |
| 6 | Destacar aprovação em teste de carga com 500 pedidos simultâneos. | **Rejeitada** | Não existe teste de carga nos 16 casos (CT01 a CT16). É informação inventada (alucinação). |
| 7 | Explicar por que o CT16 ficou bloqueado. | **Aceita** | Motivo nos dados: não havia celular Android no laboratório. A data de execução não consta, então não foi inventada. |
| 8 | Recomendar que o site pode ir ao ar, pois a aprovação passa de 90% e o principal foi corrigido. | **Rejeitada** | Aprovação real é 86,67% (< 90%) e o DEF-02 (alta) está aberto. As duas condições do critério de saída falham. |
| 9 | Incluir lições aprendidas, como pedir um celular para o laboratório. | **Aceita** | O bloqueio do CT16 por falta de celular é um fato registrado nos dados. Está na seção 8. |

**Resultado:** 4 sugestões aceitas (1, 5, 7, 9) e 5 rejeitadas (2, 3, 4, 6, 8). As rejeitadas continham números errados ou informação inventada, e seguiriam para o dono do restaurante se a IA fosse aceita sem conferência.

## 8. Lições aprendidas

- **Reservar os recursos antes de testar.** O CT16 ficou bloqueado por falta de um celular Android; é preciso reservar dispositivos antes da rodada.
- **Corrigir tudo que foi relatado, ou explicar o que fica de fora.** A equipe de desenvolvimento entregou 3 de 5 correções; DEF-02 (alta) e DEF-04 ficaram de fora e seguram a liberação.
- **Reteste mais regressão.** Os 10 casos da regressão passaram, o que mostra que as 3 correções não quebraram o que funcionava.
- **Resultado esperado vem do documento de requisitos**, não da tela: o DEF-02 só aparece comparando com o exemplo do documento.
- **Contar com cuidado.** Caso bloqueado não é caso executado; a taxa de aprovação usa só os executados.
- **A IA revisa, quem assina é a equipe.** Das 9 sugestões, 5 estavam erradas ou inventadas. Toda sugestão precisa ser conferida nos dados antes de entrar no relatório.