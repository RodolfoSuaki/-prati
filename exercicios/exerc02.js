// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

const prompt = require("prompt-sync")();

const age = parseInt(prompt("Digite sua idade para avaliarmos sua faixa etária: "));

if(age > 0 && age <= 120){
    if(age < 13){
        console.log("Você é uma criança!");
    }
    else if(age < 18){
        console.log("Você é um adolescente!");
    }
    else if(age < 66){
        console.log("Você é um adulto!");
    }
    else{
        console.log("Você é idoso!");
    }
}
else{
    console.log("Digite uma idade válida");
}