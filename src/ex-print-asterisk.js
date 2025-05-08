// Teacher's answer
/* let tamanho = 4;
for (let i = 1; i <= tamanho; i++) {
  let linha = "";
  for (let j = 1; j <= i; j++) {
    linha += "*";
  }
  console.log(linha);
} */

/* for (let i = 1; i <= linha; i++) {
  let arterisco = "";
  for (let j = 0; j < coluna; j++) {
    arterisco += "*";
  }
  console.log(arterisco);
} */

let linha = 5;
let coluna = 3;

let asterisk = "*";
let inputLine = "";
for (let i = 0; i < linha; i++) {
  for (let j = 0; j < coluna; j++) {
    inputLine += asterisk;
  }
  console.log(inputLine);
  inputLine = "";
}
