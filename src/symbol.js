// symbol - armazena símbolos. Seu valor é sempre único e imutável
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

console.log(Symbol("foo") === Symbol("foo"));
