// Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function printTables(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} =`, i * num);
  }
  return "End";
}

console.log(printTables(3));
