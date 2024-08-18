// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.


const prompt = require("prompt-sync")();

let sum = 0;
let count = 0;
let number;

while (true) {
    number = parseFloat(prompt('Digite um número (0 para sair): '));

    if (isNaN(number)) {
        console.log("Entrada inválida. Por favor, digite um número.");
    } else if (number === 0) {
        break;
    } else {
        sum += number;
        count++;
    }
    }

    if (count > 0) {
    console.log(`A média aritmética é: ${sum / count}`);
    } else {
    console.log("Nenhum número válido foi digitado.");
}