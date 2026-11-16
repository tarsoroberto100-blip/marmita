// MarmitaJá — tela

let carrinho = [];
const $ = id => document.getElementById(id);

function mensagem(id, texto, tipo) {
  $(id).textContent = texto;
  $(id).className = 'mensagem ' + tipo;
}

$('btn-adicionar').addEventListener('click', () => {
  const tamanho = $('tamanho').value;
  const qtd = Number($('quantidade').value);
  if (!validarQuantidade(qtd)) {
    mensagem('msg-item', 'Quantidade inválida: de 1 a 10 marmitas por item.', 'erro');
    return;
  }
  carrinho.push({ tamanho, qtd });
  mensagem('msg-item', 'Marmita ' + tamanho + ' adicionada.', 'ok');
  desenhar();
});

function remover(indice) {
  carrinho.splice(indice, 1);
  desenhar();
}

function desenhar() {
  const corpo = $('carrinho');
  corpo.innerHTML = '';
  $('vazio').style.display = carrinho.length ? 'none' : 'block';
  carrinho.forEach((item, i) => {
    const tr = document.createElement('tr');
    [ 'Marmita ' + item.tamanho, String(item.qtd), formatarReais(PRECO[item.tamanho] * item.qtd) ].forEach(t => {
      const td = document.createElement('td'); td.textContent = t; tr.appendChild(td);
    });
    const td = document.createElement('td');
    const b = document.createElement('button');
    b.className = 'cancelar'; b.textContent = 'Remover';
    b.addEventListener('click', () => remover(i));
    td.appendChild(b); tr.appendChild(td);
    corpo.appendChild(tr);
  });
  atualizarResumo();
}

function atualizarResumo() {
  const r = calcularResumo(carrinho, $('cupom').value);
  $('subtotal').textContent = formatarReais(r.subtotal);
  $('frete').textContent = carrinho.length ? (r.frete === 0 ? 'Grátis' : formatarReais(r.frete)) : formatarReais(0);
  $('desconto').textContent = '− ' + formatarReais(r.desconto);
  $('total').textContent = formatarReais(carrinho.length ? r.total : 0);
}

$('cupom').addEventListener('input', atualizarResumo);

$('btn-finalizar').addEventListener('click', () => {
  if (!carrinho.length) { mensagem('mensagem', 'Adicione pelo menos uma marmita.', 'erro'); return; }
  const r = calcularResumo(carrinho, $('cupom').value);
  if (!atingePedidoMinimo(r.subtotal)) { mensagem('mensagem', 'Pedido mínimo de R$ 30,00 em marmitas.', 'erro'); return; }
  if (!validarCep($('cep').value)) { mensagem('mensagem', 'CEP inválido. Use 8 números, como 60000-000.', 'erro'); return; }
  if ($('cupom').value.trim() && !cupomValido($('cupom').value)) { mensagem('mensagem', 'Cupom inválido.', 'erro'); return; }
  mensagem('mensagem', 'Pedido confirmado! Total: ' + formatarReais(r.total) + '. Chega em até 50 minutos.', 'ok');
  carrinho = [];
  desenhar();
});

desenhar();
