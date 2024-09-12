let resultado = 0;

function soma(valor) {
  resultado += Number(valor);
  return resultado;
}

function subtracao(valor) {
  resultado -= Number(valor);
  return resultado;
}

function multiplicacao(valor) {
  resultado *= Number(valor);
  return resultado;
}

function divisao(valor) {
  if (Number(valor) === 0) {
    throw new Error('divisão ilegal por zero');
  }
  resultado /= Number(valor);
  return resultado;
}

function inversao(valor) {
  return -Number(valor);
}

module.exports = { soma, subtracao, multiplicacao, divisao, inversao };