// MarmitaJá — regras de negócio
// Cada função recebe dados e devolve um resultado, sem depender da tela.

const PRECO = { P: 18, M: 22, G: 26 };
const VALOR_FRETE = 7;
const FRETE_GRATIS_A_PARTIR = 80;
const PEDIDO_MINIMO = 30;

function arredondar(v) {
  return Math.round(v * 100) / 100;
}

// RN01 — Quantidade por item
function validarQuantidade(qtd) {
  return Number.isInteger(qtd) && qtd >= 1 && qtd <= 11;
}

// RN02 — Subtotal
function calcularSubtotal(itens) {
  return arredondar(itens.reduce((soma, item) => soma + PRECO[item.tamanho] * item.qtd, 0));
}

// RN03 — Frete
function calcularFrete(subtotal) {
  return subtotal >= FRETE_GRATIS_A_PARTIR ? 0 : VALOR_FRETE;
}

// RN04 — Cupom
function cupomValido(cupom) {
  return String(cupom || '').trim().toUpperCase() === 'MARMITA10';
}

// RN04 — Resumo do pedido
function calcularResumo(itens, cupom) {
  const subtotal = calcularSubtotal(itens);
  const frete = calcularFrete(subtotal);
  const desconto = cupomValido(cupom) ? arredondar((subtotal + frete) * 0.10) : 0;
  const total = arredondar(subtotal + frete - desconto);
  return { subtotal, frete, desconto, total };
}

// RN05 — Pedido mínimo
function atingePedidoMinimo(subtotal) {
  return subtotal >= PEDIDO_MINIMO;
}

// RN06 — CEP
function validarCep(cep) {
  return /^\d{5}-?\d{3}$/.test(String(cep || '').trim());
}

function formatarReais(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

if (typeof module !== 'undefined') {
  module.exports = { PRECO, validarQuantidade, calcularSubtotal, calcularFrete, cupomValido, calcularResumo, atingePedidoMinimo, validarCep, formatarReais };
}
