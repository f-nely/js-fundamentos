let conceito = "";
let nota1 = 7,
  nota2 = 8,
  nota3 = 10,
  nota4 = 6;

let media = 0.0;

media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 9.0 && media <= 10.0) {
  console.log("A");
} else if (media >= 7.5 && media <= 8.9) {
  console.log("B");
} else if (media >= 6.0 && media <= 7.5) {
  console.log("C");
} else if (media >= 4.0 && media <= 5.9) {
  console.log("D");
} else {
  console.log("F");
}

/**
 * let media = (nota1 + nota2 + nota3 + nota4) / 4
if (media >= 9) {
    conceito = "A";
} else if (media >= 7.5) {
    conceito = "B";
} else if (media >= 6) {
    conceito = "C";
} else if (media >= 4) {
    conceito = "D";
} else {
    conceito = "F";
}
 */
