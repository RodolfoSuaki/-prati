// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let fibonacci = 0;
let actual = 1;
let previous = 0;

console.log(previous);
console.log(actual);

for(i=2; i<= 10; i++){
    fibonacci = previous + actual;
    previous = actual;
    actual = fibonacci;

    console.log(fibonacci);
}

