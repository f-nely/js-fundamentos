let numero = 2;
nameMonth = "";

switch (numero) {
  case 1:
    nameMonth = "Domingo";
    break;
  case 2:
    nameMonth = "Segunda";
    break;
  case 3:
    nameMonth = "Terça";
    break;
  case 4:
    nameMonth = "Quarta";
    break;
  case 5:
    nameMonth = "Quinta";
    break;
  case 6:
    nameMonth = "Sexta";
    break;
  case 7:
    nameMonth = "Sábado";
    break;
  default:
    nameMonth = "Dia inválido";
    break;
}

console.log(nameMonth);
