// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.



// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const PromptSync = require("prompt-sync")();

const sideA = parseFloat(PromptSync('Digite o lado A: '));
const sideB = parseFloat(PromptSync('Digite o lado B: '));
const sideC = parseFloat(PromptSync('Digite o lado C: '));

if(sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB){
    if(sideA === sideB && sideB === sideC){
        console.log('Triângulo eqüilátero');
    }
    else if(sideA !== sideB && sideB !== sideC){
        console.log('Triângulo escaleno');
    }
    else{
        console.log('Triângulo isósceles');
    }
}
else{
    console.log("Não é um triângulo.")
}