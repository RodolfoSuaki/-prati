// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

const apples = parseInt(prompt("Digite o número de maçâs que deseja comprar: "));


if(apples > 0 && apples < 12){
    total = apples * 0.30;
}
else if (apples >= 12){
    total = apples * 0.25;
}
else{
    console.log("O número digitado não está correto.");
    return
}

console.log(`O valor para ${apples} maçãs corresponde a R$ ${total.toFixed(2)}`);