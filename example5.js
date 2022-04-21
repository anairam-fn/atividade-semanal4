// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

function factorial(num) {
  let init = 1;
  for (let i = 1; i <= num; i++) {
    init = init * i;
  }
  return `${num}! = ${init}`;
}

console.log(factorial(3));
console.log(factorial(5))

