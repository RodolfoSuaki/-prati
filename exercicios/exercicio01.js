// 1. Acessando Propriedades de Objetos
// - Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.


//Criando o objeto carro
const car = {
    brand: "Ford",
    model: "Ka",
    year: "2005",
    color: "Branco"
}


for (i in car){
    console.log(car[i])
}