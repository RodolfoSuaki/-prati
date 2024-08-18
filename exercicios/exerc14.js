// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.


const prompt = require("prompt-sync")();

const number = parseInt(prompt("Digite um número: "));

let fatorial = 1;

for(i=1; i<=number; i++){
    fatorial *= i;
}

console.log(fatorial)

