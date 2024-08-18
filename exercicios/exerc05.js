// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const PromptSync = require("prompt-sync")();

const weight = parseFloat(PromptSync('Digite o seu peso para calcularmos seu IMC: '));
const height = parseFloat(PromptSync('Digite a sua altura para calcularmos seu IMC: '));

function IMC(peso, altura) {
  const indice = peso / (altura ** 2);
    return indice;
}

// Armazene o resultado da função em uma variável
const imc = IMC(weight, height);

console.log("Seu IMC é:", imc);

// Agora você pode usar a variável imc para as comparações
if (imc < 18.5) {
    console.log('Você está abaixo do peso.');
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log('Você está com peso normal.');
} else if (imc >= 25 && imc <= 29.99) {
    console.log('Você está com sobrepeso.');
} else {
    console.log('Você está com obesidade.');
}