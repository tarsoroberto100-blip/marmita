// FitPass — regras de negócio
// Cada função recebe dados e devolve um resultado, sem depender da tela.

const PLANOS = { mensal: 99.90, trimestral: 269.70, anual: 958.80 };
const NOME_PLANO = { mensal: 'Mensal', trimestral: 'Trimestral', anual: 'Anual' };
const TAXA_MATRICULA = 50;

function arredondar(v) {
  return Math.round(v * 100) / 100;
}

// RN01 — Nome
function validarNome(nome) {
  return String(nome || '').trim().length >= 3;
}

// RN02 — CPF (formato)
function validarCpf(cpf) {
  return /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(String(cpf || '').trim());
}

// RN03 — Idade e autorização
function validarIdade(idade, autorizacao) {
  if (!Number.isInteger(idade)) return false;
  if (idade < 14) return false;
  if (idade <= 18 && !autorizacao) return false;
  return true;
}

// RN05 — Taxa de matrícula
function taxaMatricula(plano) {
  return plano === 'mensal' ? TAXA_MATRICULA : 0;
}

// RN06 — Percentual de desconto
function percentualDesconto(idade, estudante) {
  let p = 0;
  if (estudante) p = Math.max(p, 15);
  if (idade >= 60) p = Math.max(p, 20);
  return p;
}

// RN04, RN05, RN06 e RN07 — Resumo da matrícula
function calcularMatricula(plano, idade, estudante) {
  const valorPlano = PLANOS[plano];
  const matricula = taxaMatricula(plano);
  const percentual = percentualDesconto(idade, estudante);
  const baseDesconto = idade >= 60 ? valorPlano + matricula : valorPlano;
  const desconto = arredondar(baseDesconto * percentual / 100);
  const total = arredondar(valorPlano + matricula - desconto);
  return { valorPlano, matricula, percentual, desconto, total };
}

function formatarReais(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

if (typeof module !== 'undefined') {
  module.exports = { PLANOS, validarNome, validarCpf, validarIdade, taxaMatricula, percentualDesconto, calcularMatricula };
}
