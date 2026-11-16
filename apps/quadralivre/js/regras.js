// QuadraLivre — regras de negócio
// Cada função recebe dados e devolve um resultado, sem depender da tela.

const PRECO_HORA = { futsal: 80, volei: 60, tenis: 70 };
const NOME_QUADRA = { futsal: 'Futsal', volei: 'Vôlei', tenis: 'Tênis' };

// RN01 — Nome
function validarNome(nome) {
  const n = String(nome || '').trim();
  return n.length >= 3 && n.length <= 40;
}

// RN02 — Telefone
function validarTelefone(telefone) {
  const digitos = String(telefone || '').replace(/\D/g, '');
  return digitos.length >= 10 && digitos.length <= 11;
}

// RN03 — Horário de funcionamento e duração
function validarHorario(inicio, duracao) {
  if (!Number.isInteger(inicio) || !Number.isInteger(duracao)) return false;
  if (duracao < 1 || duracao > 4) return false;
  return inicio >= 8 && inicio + duracao <= 22;
}

// RN04, RN05 e RN06 — Valor da reserva
function valorReserva(quadra, inicio, duracao, socio) {
  const base = PRECO_HORA[quadra];
  let total = 0;
  for (let hora = inicio; hora < inicio + duracao; hora++) {
    total += hora > 18 ? base * 1.25 : base;
  }
  if (socio) total = total * 0.9;
  return Math.round(total * 100) / 100;
}

// RN07 — Conflito de horário
function temConflito(reservas, nova) {
  return reservas.some(r =>
    r.quadra === nova.quadra &&
    r.data === nova.data &&
    r.inicio === nova.inicio
  );
}

function formatarReais(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

if (typeof module !== 'undefined') {
  module.exports = { PRECO_HORA, validarNome, validarTelefone, validarHorario, valorReserva, temConflito, formatarReais };
}
