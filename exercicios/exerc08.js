// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

const num1 = parseInt(prompt('Digite o primeiro número: '));
const num2 = parseInt(prompt('Digite o segundo número: '));
let arrayNumber = []

if(num1 == num2){
    console.log("Você digitou números iguais, não será possível ordenar eles de forma crescente.");
}
else{
    if(num1 > num2){
        arrayNumber.push(num1);
        arrayNumber.push(num2);
        console.log(arrayNumber);
    }
    else{
        arrayNumber.push(num2);
        arrayNumber.push(num1);
        console.log(arrayNumber);
    }
}