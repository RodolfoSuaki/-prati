// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const PromptSync = require("prompt-sync")();

const grade = parseInt(PromptSync("Digite sua nota de 0 a 10: "));

if(grade >= 7){
    console.log("Você está aprovado!");
}
else if(grade > 4 && grade < 7){
    console.log("Você está recuperação!");
}
else{
    console.log("Infelizmente você foi reprovado!");
}