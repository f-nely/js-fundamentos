let valor1 = 10;
let valor2 = 5;

function calculaSoma(n1, n2) {
  return n1 + n2;
}

function calculaSubtracao(n1, n2) {
  return n1 - n2;
}

function calculaMultiplicacao(n1, n2) {
  return n1 * n2;
}

function calculaDivisao(n1, n2) {
  if (n2 > 0) {
    return n1 / n2;
  }
}

console.log(calculaSoma(valor1, valor2)); // 15
console.log(calculaSubtracao(valor1, valor2)); // 5
console.log(calculaMultiplicacao(valor1, valor2)); // 50
console.log(calculaDivisao(valor1, valor2)); // 2
