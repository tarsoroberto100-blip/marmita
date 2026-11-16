// FitPass — tela

const $ = id => document.getElementById(id);

function lerFormulario() {
  return {
    nome: $('nome').value,
    cpf: $('cpf').value,
    idade: Number($('idade').value === '' ? NaN : $('idade').value),
    autorizacao: $('autorizacao').checked,
    estudante: $('estudante').checked,
    plano: document.querySelector('input[name="plano"]:checked').value
  };
}

function mensagem(texto, tipo) {
  $('mensagem').textContent = texto;
  $('mensagem').className = 'mensagem ' + tipo;
}

function validar(d) {
  if (!validarNome(d.nome)) return 'Informe o nome completo.';
  if (!validarCpf(d.cpf)) return 'CPF inválido. Use 11 números, como 123.456.789-09.';
  if (!Number.isInteger(d.idade)) return 'Informe a idade.';
  if (!validarIdade(d.idade, d.autorizacao)) {
    return d.idade < 18 && d.idade >= 14
      ? 'Menores de 18 anos precisam da autorização do responsável.'
      : 'A matrícula é permitida a partir de 14 anos.';
  }
  return '';
}

function limparResumo() {
  ['r-plano', 'r-matricula', 'r-desconto', 'r-total'].forEach(id => { $(id).textContent = '—'; });
}

function mostrarResumo(d) {
  const r = calcularMatricula(d.plano, d.idade, d.estudante);
  $('r-plano').textContent = NOME_PLANO[d.plano] + ' · R$ ' + r.valorPlano;
  $('r-matricula').textContent = r.matricula === 0 ? 'Isenta' : 'R$ ' + r.matricula;
  $('r-desconto').textContent = r.percentual ? '− R$ ' + r.desconto + ' (' + r.percentual + '%)' : 'Sem desconto';
  $('r-total').textContent = 'R$ ' + r.total;
  return r;
}

$('btn-simular').addEventListener('click', () => {
  const d = lerFormulario();
  const erro = validar(d);
  if (erro) { mensagem(erro, 'erro'); limparResumo(); return; }
  mensagem('', '');
  mostrarResumo(d);
});

$('form-matricula').addEventListener('submit', ev => {
  ev.preventDefault();
  const d = lerFormulario();
  const erro = validar(d);
  if (erro) { mensagem(erro, 'erro'); limparResumo(); return; }
  const r = mostrarResumo(d);
  mensagem('Matrícula confirmada! Bem-vindo(a), ' + d.nome.trim().split(' ')[0] + '. Total: R$ ' + r.total, 'ok');
});
