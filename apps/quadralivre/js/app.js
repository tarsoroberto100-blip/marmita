// QuadraLivre — tela

const CHAVE = 'quadralivre_reservas';
let reservas = carregar();

const $ = id => document.getElementById(id);

// Horários de 6h a 23h no seletor
for (let h = 6; h <= 23; h++) {
  const op = document.createElement('option');
  op.value = h;
  op.textContent = String(h).padStart(2, '0') + ':00';
  if (h === 8) op.selected = true;
  $('inicio').appendChild(op);
}

function carregar() {
  try { return JSON.parse(localStorage.getItem('quadralivre-reservas')) || []; }
  catch (e) { return []; }
}

function salvar() {
  localStorage.setItem(CHAVE, JSON.stringify(reservas));
}

function lerFormulario() {
  return {
    nome: $('nome').value,
    telefone: $('telefone').value,
    quadra: $('quadra').value,
    data: $('data').value,
    inicio: parseInt($('inicio').value, 10),
    duracao: Number($('duracao').value),
    socio: $('socio').checked
  };
}

function mostrarMensagem(texto, tipo) {
  $('mensagem').textContent = texto;
  $('mensagem').className = 'mensagem ' + tipo;
}

function validar(r) {
  if (!validarNome(r.nome)) return 'Informe o nome do responsável (3 a 40 caracteres).';
  if (!validarTelefone(r.telefone)) return 'Telefone inválido. Use DDD + celular: (85) 99999-1234.';
  if (!r.data) return 'Escolha a data da reserva.';
  if (!validarHorario(r.inicio, r.duracao)) return 'Horário fora do permitido. Funcionamos das 08:00 às 22:00, reservas de 1 a 3 horas.';
  return '';
}

$('btn-calcular').addEventListener('click', () => {
  const r = lerFormulario();
  const erro = validar(r);
  if (erro) { mostrarMensagem(erro, 'erro'); $('valor').textContent = ''; return; }
  mostrarMensagem('', '');
  $('valor').textContent = 'Valor: ' + formatarReais(valorReserva(r.quadra, r.inicio, r.duracao, r.socio));
});

$('form-reserva').addEventListener('submit', ev => {
  ev.preventDefault();
  const r = lerFormulario();
  const erro = validar(r);
  if (erro) { mostrarMensagem(erro, 'erro'); return; }
  if (temConflito(reservas, r)) { mostrarMensagem('Essa quadra já está reservada nesse horário.', 'erro'); return; }
  r.valor = valorReserva(r.quadra, r.inicio, r.duracao, r.socio);
  r.id = Date.now();
  reservas.push(r);
  salvar();
  desenhar();
  mostrarMensagem('Reserva confirmada! Valor: ' + formatarReais(r.valor), 'ok');
  $('valor').textContent = '';
});

function formatarData(iso) {
  const [a, m, d] = iso.split('-');
  return d + '/' + m + '/' + a;
}

function desenhar() {
  const lista = $('lista');
  lista.innerHTML = '';
  $('vazio').style.display = reservas.length ? 'none' : 'block';
  reservas.forEach(r => {
    const tr = document.createElement('tr');
    const fim = r.inicio + r.duracao;
    const celulas = [
      formatarData(r.data),
      String(r.inicio).padStart(2, '0') + ':00 às ' + String(fim).padStart(2, '0') + ':00',
      NOME_QUADRA[r.quadra],
      r.nome.trim(),
      formatarReais(r.valor)
    ];
    celulas.forEach(t => { const td = document.createElement('td'); td.textContent = t; tr.appendChild(td); });
    const td = document.createElement('td');
    const b = document.createElement('button');
    b.className = 'cancelar'; b.textContent = 'Cancelar';
    b.addEventListener('click', () => {
      reservas = reservas.filter(x => x.id !== r.id);
      salvar(); desenhar();
      mostrarMensagem('Reserva cancelada.', 'ok');
    });
    td.appendChild(b); tr.appendChild(td);
    lista.appendChild(tr);
  });
}

desenhar();
