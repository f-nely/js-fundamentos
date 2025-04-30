let a = 30,
  b = 30,
  c = 30;

if (a === b && a === c) {
  console.log("Equilátero");
} else if (a !== b && a !== c && b !== c) {
  console.log("Escaleno");
} else {
  console.log("Isósceles");
}
