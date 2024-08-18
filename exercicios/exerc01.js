// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// import prompt from 'prompt-sync';
const prompt = require('prompt-sync')();

const number = parseInt(prompt('Digite um numero para ser verificado se é par ou ímpar: '))


if(number % 2 === 0){
    console.log(`O número ${number} é par!`);
}else{
    console.log(`O número ${number} é ímpar!`)
}